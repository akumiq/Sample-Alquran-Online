import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './component/header'
import Content from './component/content';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSeluruhSurat: [],
            inputSearchValue: "",
            newDataSearch: null
        }
    }

    componentDidMount() {
        this.getDataSeluruhSurat()
    }

    getDataSeluruhSurat = () => {
        axios.get(`https://api.banghasan.com/quran/format/json/surat`)
            .then(res => {
                this.setState({
                    dataSeluruhSurat: res.data.hasil
                }, () => {
                    console.log(this.state.dataSeluruhSurat, 'berhasil fetch api')
                })
            }).catch(err => console.log(err, 'failed to fetch api'))
    }

    onHandleInput = (event) => {
        this.setState({
            inputSearchValue: event.target.value,
        }, () => {
            if (this.state.dataSeluruhSurat) {
                const searchSurat = this.state.dataSeluruhSurat.filter((item) => {
                    return (
                        item.nama.toLowerCase().indexOf(this.state.inputSearchValue.toLowerCase()) > -1
                    )
                })
                this.setState({
                    newDataSearch: searchSurat
                })
            }
        })
    }

    render() {
        return (
            <div className='App'>

                {/* component header */}
                <Header />

                {/* component content */}
                <Content
                    dataSeluruhSurat={this.state.dataSeluruhSurat}
                    onHandleInput={this.onHandleInput}
                    inputSearchValue={this.state.inputSearchValue}
                    dataKeseluruhan={this.state.newDataSearch}
                />

            </div>
        );
    }
}

export default App;
