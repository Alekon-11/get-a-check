import './check-list-item.css';

function CheckListItem(){
    return(
        <li className="checks__item">
            <input className="checks__shop-name" defaultValue={'Shop'}/>
            <div className="checks__date">15/06/22</div>
            <ul className="checks__prod-elems">
                <li className="checks__prod-elem">
                    Сыр гауда 200г
                    <span>220 ₽</span>
                </li>
            </ul>
            <div className="checks__total">total: 880 ₽</div>
            <button className="btn btn-remove">remove</button>
        </li>
    )
}

export default CheckListItem;
