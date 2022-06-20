import './checks-filter.css';

function ChecksFilter({onSetFilter, stateFilter}){

    const buttons = [
        {name: 'All', lable: 'All'},
        {name: 'Special', lable: 'Special'}
    ]

    const btnList = buttons.map((item, num) => {

        const active = stateFilter === item.name;

        const clazz = active ? 'btn btn-all btn-active' : 'btn btn-all';

        return <button key={num} 
                       className={clazz}
                       onClick={() => onSetFilter(item.name)}>
                    {item.lable}
                </button>
    })

    return(
        <div className="checks__filter">
            {btnList}
        </div>
    )
}

export default ChecksFilter;