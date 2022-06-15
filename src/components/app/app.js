import { Component } from "react";

import Header from "../header/header";
import CreateCheck from "../create-check/create-check";

import './app.css';

class App extends Component{
    render(){
        return (
            <div className="app">
                <Header />
                <div className="container">
                    <CreateCheck />
                </div>
            </div>
        )
    }
}

export default App;
