import React from 'react'

export default function Sort({setSelectedSortOrderStr, selectedSortOrderStr, optionsArr}) {
    return (
        <label>
            Sort
            <select value={selectedSortOrderStr} onChange={(e) => setSelectedSortOrderStr(e.target.value)}>
                <option value="None">None</option>
                {
                    optionsArr.map(option => <option value={option} key={option}>{option}</option>)
                }
            </select>
        </label>
    )
}


