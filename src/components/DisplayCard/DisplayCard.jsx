import React from 'react'

export default function DisplayCard({ dataObj }) {
    // console.log('data at render: ', dataObj)
    return (
        <article>
            <h3>{dataObj.pokemon}</h3>
            <img src={dataObj.url_image} alt={dataObj.pokemon} />
            <p>{`HP: ${dataObj.hp}`}</p>
            <p>{`Base Experience: ${dataObj.base_experience}`}</p>
            <p>{`Type: ${dataObj.type_1}`}</p>
        </article>
    )
}
