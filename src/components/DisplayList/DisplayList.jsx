import React from 'react'
import DisplayCard from '../DisplayCard/DisplayCard.jsx'

export default function DisplayList({dataArr}) {
    return (
        <section>
            <ul>   
                {
                    dataArr.map(dataObj => <li key={dataObj.pokemon}> <DisplayCard dataObj={dataObj} /> </li>)
                }
            </ul>
        </section>
    )
}
