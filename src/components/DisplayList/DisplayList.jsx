import React from 'react'
import DisplayCard from '../DisplayCard/DisplayCard.jsx'

export default function DisplayList({dataArr}) {
    return (
        <>
            {
                dataArr.map(dataObj => <DisplayCard  key={dataObj.pokemon} dataObj={dataObj} /> )
            }
        </>
    )
}
