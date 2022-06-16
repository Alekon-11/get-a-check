import './create-check-items.css'

function CreateCheckItems({product, price, onDelete}){
    return (
        <li className="create-check__item">
            <div className="create-check__name">{product}</div>
            <div className="create-check__price">{price} <span>₽</span></div>
            <button className="create-check__btn-close btn-close" onClick={onDelete}></button>
        </li>
    )
}

export default CreateCheckItems;