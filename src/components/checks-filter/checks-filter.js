import './checks-filter.css';

function ChecksFilter(){
    return(
        <div className="checks__filter">
            <button className="btn btn-all btn-active">All</button>
            <button className="btn btn-special">Special</button>
        </div>
    )
}

export default ChecksFilter;