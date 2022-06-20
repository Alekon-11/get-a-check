import { Component } from 'react';

import './checks-search.css';

class ChecksSearch extends Component{
    state = {
        value: ''
    }

    onSetValue = (e) => {
        this.setState({
            value: e.target.value
        })
        this.props.onSetSearchValue(e.target.value);
    }
    
    render(){
        return(
            <div className="checks__search">
                <input type="text" 
                       name="search-input" 
                       onChange={this.onSetValue} 
                       value={this.state.value}
                       className="input input-search" 
                       placeholder='Search...'/>
            </div>
        )
    }
    
}

export default ChecksSearch;