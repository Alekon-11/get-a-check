import CheckListItem from '../check-list-item/check-list-item';

import './check-list.css';

function CheckList({checks, onDeleteCheck, onSetName, onToggleSpecial}){
    const newItems = checks.map(item => {
        let {id, ...props} = item

        return (
            <CheckListItem key={id} 
                           id={id} 
                           {...props} 
                           onDeleteCheck={() => onDeleteCheck(id)}
                           onToggleSpecial={() => onToggleSpecial(id)}
                           onSetName={onSetName} />
        );
    })

    return(
        <ul className="checks__wrapper">
           {newItems}
        </ul>
    )
}

export default CheckList;
