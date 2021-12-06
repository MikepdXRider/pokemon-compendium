import React from 'react'

export default function Filter({ typeDataArr, setSelectedTypeStr, selectedTypeStr }) {
    return (
        <label>
            Type
            <select value={selectedTypeStr} onChange={(e) => setSelectedTypeStr(e.target.value)}>
                <option value="All">All</option>
                {
                    typeDataArr.map(typeDataStr => <option value={typeDataStr} key={typeDataStr}>{typeDataStr}</option>)
                }
            </select>
        </label>
    )
}
