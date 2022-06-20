import { Component } from 'react';

import './check-list-item.css';

class CheckListItem extends Component{
    state = {
        value: this.props.name
    }

    onSetValue = (e) => {
        this.setState(({
            value: e.target.value
        }))

        this.props.onSetName(this.props.id, e.target.value);
    }


    render(){
        let {date, products, onDeleteCheck, onToggleSpecial, special} = this.props;

        let itemClass = 'checks__item';
        if(special){
            itemClass = itemClass + ' checks__item_special';
        }

        const productItems = products.map((item, num) => {
            return (
                <li className="checks__prod-elem" key={item.price + num}>
                        {item.product}
                        <span>{item.price} ₽</span>
                </li>
            )
        });

        const total = products.map(item => +item.price)
                      .reduce((sum, current) => sum + current);

        return(
            <li onClick={onToggleSpecial} className={itemClass}>
                <input className="checks__shop-name" onChange={this.onSetValue} value={this.state.value} />
                <div className="checks__date">{date}</div>
                <ul className="checks__prod-elems">
                    {productItems}
                </ul>
                <div className="checks__total">total: {total} ₽</div>
                <button onClick={onDeleteCheck} className="btn btn-remove">remove</button>
            </li>
        );    
    }
}

export default CheckListItem;
