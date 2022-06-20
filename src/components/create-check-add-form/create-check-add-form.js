import { Component } from 'react';

import './create-check-add-form.css';

class CreateCheckAddForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            product: '',
            price: ''
        }
    }

    onSetValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSetProduct = (e) => {
        e.preventDefault();

        let {product, price} = this.state;
        if(product && price){
            this.props.onSetProduct(product, price);
            this.setState({
                product: '',
                price: ''
            })
        }
    }

    render(){
        let {product, price} = this.state;
        return (
            <>
                <form onSubmit={this.onSetProduct} className="create-check__form">
                    <input type="text" 
                           name="product"
                           placeholder='Product...' 
                           className='input input-product'
                           onChange={this.onSetValue}
                           value={product}/>
                    <input type="number" 
                           name="price"                                 // возможно будут изменения в тегах и положении кнопки в дереве...    
                           placeholder='Price...' 
                           className='input input-price'
                           onChange={this.onSetValue}
                           value={price}/>
                    <button type="submit" className='btn btn-set'>set</button>
                    <button type="button" onClick={this.props.onCreateCheck} className='btn btn-done'>done</button> 
                </form>
            </>
        )
    }
}

export default CreateCheckAddForm;