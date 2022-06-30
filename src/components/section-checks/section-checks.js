import ChecksNav from '../checks-nav/checks-nav';
import CheckList from '../check-list/check-list';
import EmptyBlock from '../empty-block/empty-block';

import './section-checks.css'

function SectionChecks({checks, onDeleteCheck, onSetName, onSetSearchValue, onToggleSpecial, onSetFilter, stateFilter}){
    return (
        <section className='section checks'>
            <h1 className="checks__logo">Checks</h1>
            <ChecksNav stateFilter={stateFilter} onSetFilter={onSetFilter} onSetSearchValue={onSetSearchValue} />
            {!checks.length ? <EmptyBlock /> : <CheckList onToggleSpecial={onToggleSpecial} onSetName={onSetName} onDeleteCheck={onDeleteCheck} checks={checks} />} 
        </section>
    )
}

export default SectionChecks;