import React from 'react'
import PropTypes from 'prop-types'

export default function DisplayCard({ dataObj }) {
    console.log('data at render: ', dataObj)
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

// https://reactjs.org/docs/typechecking-with-proptypes.html
DisplayCard.propTypes = {
    pokemon: PropTypes.string,
    url_image: PropTypes.string,
    hp: PropTypes.number,
    base_experience: PropTypes.number,
    type_1:PropTypes.string,
}

