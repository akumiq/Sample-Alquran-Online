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
            newDataSearch: null,
            isiSurat: null,
            namaSurat: ""
        }

    }

    componentDidMount() {

        // render function getDataSurat
        this.getDataSeluruhSurat()

    }

    // get API seluruh data surat
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
            isiSurat: null
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

    bacaSurat = (nomor, namaSurat) => {
        axios.get(`https://api.banghasan.com/quran/format/json/surat/${nomor}/ayat/1-10`).then(result => {
            console.log(result.data.ayat.data.ar)

            this.setState({
                isiSurat: result.data.ayat.data.ar,
                namaSurat: namaSurat,
                inputSearchValue: ''
            })
        })
    }

    backHome = () => {
        this.setState({
            isiSurat: null,
            newDataSearch: null
        })
    }

    render() {
        const {
            dataSeluruhSurat,
            inputSearchValue,
            newDataSearch,
            isiSurat,
            namaSurat
        } = this.state

        const {
            onHandleInput,
            bacaSurat,
            backHome
        } = this

        return (
            <div className='App'>

                {/* component header */}
                <Header />

                {/* component content */}
                <Content
                    dataSeluruhSurat={dataSeluruhSurat}
                    onHandleInput={onHandleInput}
                    inputSearchValue={inputSearchValue}
                    dataKeseluruhan={newDataSearch}
                    isiSurat={isiSurat}
                    bacaSurat={bacaSurat}
                    namaSurat={namaSurat}
                    backHome={backHome}
                />

            </div>
        );
    }
}

export default App;
