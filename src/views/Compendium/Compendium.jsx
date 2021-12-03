// This is where everything will be displayed.
import React from 'react'
import { useState, useEffect } from 'react';
import DisplayList from '../../components/DisplayList/DisplayList.jsx';
import fetchAPIData from '../../services/pokemon-api.jsx';
// import data fetching function here.

export default function Compendium() {
    const [dataArr, setdataArr] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        async function fetchData() {
            const newDataArr = await fetchAPIData();
            setdataArr(newDataArr);
        }

        fetchData();
        setIsLoading(false);
    }, [])

    return (
        <section>
           { isLoading ? <h1>Loading...</h1> : <DisplayList dataArr={dataArr}/> }
        </section>
    )
}
