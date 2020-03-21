import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './component/header'
import Content from './component/content';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSeluruhSurat: []
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

    render() {
        return (
            <div className='App'>

                {/* component header */}
                <Header />

                {/* component content */}
                <Content
                    dataSeluruhSurat={this.state.dataSeluruhSurat}
                />

            </div>
        );
    }
}

export default App;
