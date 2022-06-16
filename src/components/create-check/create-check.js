import CreateCheckAddForm from '../create-check-add-form/create-check-add-form';
import CreateCheckItems from '../create-check-items/create-check-items';

// import { Component } from 'react';

import './create-check.css';

function CreateCheck({data, onSetProduct, onDelete}){
    const items = data.map(item => {
        let {id, ...otherProps} = item;
        return <CreateCheckItems key={id} {...otherProps} onDelete={() => onDelete(id)}/>
    })

    return (
        <section className='create-check'>
            <ul className='create-check__list'>
                {items}
            </ul>
            <CreateCheckAddForm onSetProduct={onSetProduct} />
        </section>
    )
}

export default CreateCheck;