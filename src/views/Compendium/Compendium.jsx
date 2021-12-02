// This is where everything will be displayed.
import React from 'react'
import { useState, useEffect } from 'react';
import fetchAPIData from '../../services/example.jsx';
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
        <div>
           { isLoading ? <h1>Loading...</h1> : <h1>{JSON.stringify(dataArr)}</h1> }
        </div>
    )
}
