import CreateCheckAddForm from '../create-check-add-form/create-check-add-form';
import CreateCheckItems from '../create-check-items/create-check-items';
import EmptyBlock from '../empty-block/empty-block';

// import { Component } from 'react';

import './create-check.css';

function CreateCheck({data, onSetProduct, onDelete, onCreateCheck}){
    const items = data.map(item => {
        let {id, ...otherProps} = item;
        return <CreateCheckItems key={id} {...otherProps} onDelete={() => onDelete(id)}/>
    })

    return (
        <section className='create-check'>
            {!data.length ? <EmptyBlock /> : <ul className='create-check__list'>
                                                 {items}
                                             </ul>}
            <CreateCheckAddForm onCreateCheck={onCreateCheck} onSetProduct={onSetProduct} />
        </section>
    )
}

export default CreateCheck;