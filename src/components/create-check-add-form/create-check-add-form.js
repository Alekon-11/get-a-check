import './create-check-add-form.css';

function CreateCheckAddForm(){
    return (
        <>
            <form className="create-check__form">
                <input type="text" 
                       name="product-name"
                       placeholder='Product...' 
                       className='create-check__input_product'/>
                <input type="number" 
                       name="product-price"                                 // возможно будут изменения в тегах и положении кнопки в дереве...    
                       placeholder='Price...' 
                       className='create-check__input_price'/>
                <button type="submit" className='create-check__btn_set'>set</button>
                <button type="submit" className='create-check__btn_done'>done</button> 
            </form>
        </>
    )
}

export default CreateCheckAddForm;