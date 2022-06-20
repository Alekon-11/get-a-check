import ChecksFilter from '../checks-filter/checks-filter';
import ChecksSearch from '../checks-search/checks-search';

import './checks-nav.css';

function ChecksNav({onSetSearchValue, onSetFilter, stateFilter}){
    return(
        <nav className="checks__nav">
            <ChecksFilter stateFilter={stateFilter} onSetFilter={onSetFilter} />
            <ChecksSearch onSetSearchValue={onSetSearchValue}/> 
        </nav>
    )
}

export default ChecksNav;