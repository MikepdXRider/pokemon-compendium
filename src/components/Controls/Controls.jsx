import React from 'react'
import Filter from '../Forms/Filter.jsx'
import Sort from '../Forms/Sort.jsx'

export default function Controls({ typeDataArr, setSelectedTypeStr, selectedTypeStr, setSelectedSortOrderStr, selectedSortOrderStr }) {
    return (
        <section>
            <Filter typeDataArr={typeDataArr} selectedTypeStr={selectedTypeStr} setSelectedTypeStr={setSelectedTypeStr} />
            
            {
              selectedTypeStr && <Sort setSelectedSortOrderStr={setSelectedSortOrderStr} selectedSortOrderStr={selectedSortOrderStr} optionsArr={['asc', 'desc']}/>
            }
        </section>
    )
}
