import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './component/header'

class App extends Component {
    render() {
        return (
            <div
                className='App'>

                {/*component header*/}
                <Header />

            </div>
        );
    }
}

export default App;
