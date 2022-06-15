import CreateCheckAddForm from '../create-check-add-form/create-check-add-form';
import CreateCheckItems from '../create-check-items/create-check-items';

import './create-check.css';

function CreateCheck(){
    return (
        <section className='create-check'>
            <ul className='create-check__list'>
                <CreateCheckItems />
                <CreateCheckItems />
                <CreateCheckItems />
            </ul>
            <CreateCheckAddForm />
        </section>
    )
}

export default CreateCheck;