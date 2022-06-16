import ChecksNav from '../checks-nav/checks-nav';
import CheckList from '../check-list/check-list';

import './section-checks.css'

function SectionChecks(){
    return (
        <section className='section checks'>
            <h1 className="checks__logo">Checks</h1>
            <ChecksNav />
            <CheckList />
        </section>
    )
}

export default SectionChecks;