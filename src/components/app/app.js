import { Component } from "react";

import Header from "../header/header";
import CreateCheck from "../create-check/create-check";
import SectionChecks from "../section-checks/section-checks";

import './app.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {product: 'Сыр гауда 200г', price: 220, id:1 + ('EvsRg' + (Math.random() * 100).toFixed(0))},
                {product: 'Спагетти 500г', price: 80, id:2 + ('EvsRg' + (Math.random() * 100).toFixed(0))}
            ]
        }
        this.maxId = this.state.data.length
    }

    onDelete = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }));
    }

    onSetProduct = (product, price) => {
        this.setState(({data}) => {
            let newItem = {
                product: product, 
                price: price, 
                id: ++this.maxId + ('EvsRg' + (Math.random() * 100).toFixed(0))
            }

            let newData = [...data, newItem]

            return {
                data: newData
            }
        });
    }

    render(){
        let { data } = this.state;

        return (
            <div className="app">
                <Header />
                <div className="container">
                    <CreateCheck onDelete={this.onDelete} onSetProduct={this.onSetProduct} data={data} />
                    <SectionChecks /> 
                </div>
            </div>
        )
    }
}

export default App;
