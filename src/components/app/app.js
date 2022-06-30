import { Component } from "react";

import Header from "../header/header";
import CreateCheck from "../create-check/create-check";
import SectionChecks from "../section-checks/section-checks";
import Footer from "../footer/footer";

import './app.css';

class App extends Component{
    constructor(props){
        super(props);

        this.checkDate = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;

        this.state = {
            data: [],
            checks: [],
            searchValue: '',
            filter: 'All'
        };
        
        this.maxId = 2;
    }

    componentDidMount(){
        if(!localStorage.getItem('checks') || !localStorage.getItem('products')){
            localStorage.setItem('checks','[]');
            localStorage.setItem('products','[]');
        }
        this.setState({
            checks: JSON.parse(localStorage.getItem('checks')),
            data: JSON.parse(localStorage.getItem('products'))
        })
    }

    componentDidUpdate(){
        localStorage.setItem('checks', JSON.stringify(this.state.checks));
        localStorage.setItem('products', JSON.stringify(this.state.data));
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
                return {product: item.product, price: item.price, id: item.id}
            })

            const check = {
                name: 'Shop',
                date: this.checkDate, 
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
        
        // let exp = new RegExp(value,'ig');
        // console.log(list.filter(item => exp.test(item.name)));           // доделать поиск по строке
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
