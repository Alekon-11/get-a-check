import ChecksFilter from '../checks-filter/checks-filter';
import ChecksSearch from '../checks-search/checks-search';

import './checks-nav.css';

function ChecksNav(){
    return(
        <nav className="checks__nav">
            <ChecksFilter />
            <ChecksSearch /> 
        </nav>
    )
}

export default ChecksNav;