import { Component } from "react";

import Header from "../header/header";
import CreateCheck from "../create-check/create-check";
import SectionChecks from "../section-checks/section-checks";
import Footer from "../footer/footer";

import './app.css';

class App extends Component{
    constructor(props){
        super(props);

        // this.date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;

        this.state = {
            data: [
                {product: 'Сыр гауда 200г', price: 220, id:1 + ('EvsRg' + (Math.random() * 100).toFixed(0))},
                {product: 'Спагетти 500г', price: 80, id:2 + ('EvsRg' + (Math.random() * 100).toFixed(0))}
            ],
            checks: [
                {       
                    name: 'Shop',
                    date: '15/6/2022', 
                    products: [
                        {product: 'Сыр гауда', price: 200},
                        {product: 'Колбаса', price: 154},
                    ], 
                    id:1 + ('EvsRg' + (Math.random() * 100).toFixed(0)),
                    special: false
                },
                {   
                    name: 'Shop',
                    date: '17/6/2022', 
                    products: [
                        {product: 'Крабовые палочки', price: 93}
                    ], 
                    id:2 + ('EvsRg' + (Math.random() * 100).toFixed(0)),
                    special: false
                }
            ],
            searchValue: '',
            filter: 'All'
        };
        
        this.maxId = 2;
    }

    onDelete = (id) => {
        this.setState((state) => ({
            data: state.data.filter(item => item.id !== id)
        }));
    }

    onDeleteCheck = (id) => {
        this.setState(({checks}) => ({
            checks: checks.filter(item => item.id !== id)
        }));
    }

    onSetProduct = (product, price) => {
        this.setState(({data}) => {
            const newItem = {
                product: product, 
                price: price, 
                id: ++this.maxId + ('EvsRg' + (Math.random() * 100).toFixed(0))
            }

            const newData = [...data, newItem]

            return {
                data: newData
            }
        });
    }

    onSetName = (id,value) => {
        this.setState(({checks}) => {
            const newArr = checks.map(item => {
                if(item.id !== id){
                    return item;
                }
                return {...item, name: value};
            })

            return {
                checks: newArr
            }
        })
    }

    onSetSearchValue = (value) => {
        this.setState({
            searchValue: value
        })
    }

    onCreateCheck = () => {
        if(!this.state.data.length){
            return;
        }
        this.setState(({checks, data}) => {
            const productItems = data.map(item => {
                return {product: item.product, price: item.price}
            })

            const check = {
                name: 'Shop',
                date: '15/6/2022', 
                products: productItems, 
                id: ++this.maxId + ('EvsRg' + (Math.random() * 100).toFixed(0)),
                special: false
            }
    
            const newChecks = [...checks, check]

            return{
                checks: newChecks,
                data: []
            }
        })
    }

    onToggleSpecial = (id) => {
        this.setState(({checks}) => {
            const newList = checks.map(item => {
                if(item.id !== id){
                    return item;
                }
                return {...item, special: !item.special}
            })

            return {
                checks: newList
            }
        })
    }

    onSetFilter = (value) => {
        this.setState({
            filter: value
        })
    }

    searchChecks = (value, list) => {
        if(value === 0){
            return list;
        }
        return list.filter(item => item.name.includes(value));
    }

    changeFilter = (value, list) => {
        switch (value) {
            case "Special":
                return list.filter(item => item.special === true);
            default:
                return list;
        }
    }

    render(){
        let { data, checks,  searchValue, filter} = this.state;

        return (
            <div className="app">
                <Header />
                <div className="container">
                    <CreateCheck onCreateCheck={this.onCreateCheck} 
                                 onDelete={this.onDelete} 
                                 onSetProduct={this.onSetProduct} 
                                 data={data} />
                    <SectionChecks onSetSearchValue={this.onSetSearchValue} 
                                   onSetName={this.onSetName} 
                                   onDeleteCheck={this.onDeleteCheck} 
                                   onToggleSpecial={this.onToggleSpecial}
                                   onSetFilter={this.onSetFilter}
                                   stateFilter={filter}
                                   checks={this.changeFilter(filter, this.searchChecks(searchValue, checks))}/> 
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;
