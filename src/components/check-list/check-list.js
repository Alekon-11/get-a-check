import CheckListItem from '../check-list-item/check-list-item';

import './check-list.css';

function CheckList(){
    return(
        <ul className="checks__wrapper">
            <CheckListItem />
            <CheckListItem />
            <CheckListItem />
            <CheckListItem />
            <CheckListItem />
        </ul>
    )
}

export default CheckList;
