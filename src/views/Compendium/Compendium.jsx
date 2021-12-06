// This is where everything will be displayed.
import React from 'react'
import { useState, useEffect } from 'react';
import Controls from '../../components/Controls/Controls.jsx';
import DisplayList from '../../components/DisplayList/DisplayList.jsx';
import { fetchAPIData, fetchAPIDataByOrder, fetchAPIDataByType, fetchAPITypeData } from '../../services/pokemon-api.jsx';
// import sortByOrder from '../../utils/sortData.jsx';


export default function Compendium() {
    const [dataArr, setDataArr] = useState([]);
    const [typeDataArr, setTypeDataArr] = useState([]);
    const [selectedTypeStr, setSelectedTypeStr] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedSortOrderStr, setSelectedSortOrderStr] = useState('');
    

    useEffect(() => {
        setIsLoading(true);
        async function fetchData() {
            const newDataArr = await fetchAPIData();
            setDataArr(newDataArr);
            const newTypeDataArr = await fetchAPITypeData();
            setTypeDataArr(newTypeDataArr);
            setIsLoading(false);
        }

        fetchData();
    }, []);


    useEffect(() => {
        if(!selectedTypeStr) return; 
        setIsLoading(true);
        async function fetchDataByType() {
            if (selectedTypeStr === 'All') { 
                const newDataArr = await fetchAPIData();
                setDataArr(newDataArr);
            } else {
                const newDataArr = await fetchAPIDataByType(selectedTypeStr);
                setDataArr(newDataArr)
            }
            setIsLoading(false);
        }

        fetchDataByType();
    }, [selectedTypeStr]);


    useEffect(() => {
        if(!selectedSortOrderStr) return; 
        setIsLoading(true);
        async function fetchDataBySortOrder() {
            if (selectedSortOrderStr === 'None') { 
                const newDataArr = await fetchAPIData();
                setDataArr(newDataArr);
            } else {
                const newDataArr = await fetchAPIDataByOrder(selectedSortOrderStr);
                setDataArr(newDataArr);
            }
            setIsLoading(false);
        }

         fetchDataBySortOrder();
    }, [selectedSortOrderStr]);

// This is not an appropriate approach. 
// True ESLint rules would not allow this to work without passing dataArr as a dependency and that causes an infinite loop. 
// The useEffect hook guarantees the state values in the input/dependency array are always current before executing the code.
// Vonta said there is potentially a path to resolve this issue by using a second state for sortedDataArr. I don't  know how to achieve this conceptually. 
    // useEffect(() => {
    //     if(!selectedSortOrderStr) return;

    //     async function sortData() {
    //         if (sortByOrder === 'None') {
    //             const newDataArr = await fetchAPIDataByType(selectedTypeStr);
    //             setDataArr(newDataArr);
    //         } else {
    //             const newDataArr = sortByOrder(dataArr, selectedSortOrderStr);
    //             setDataArr(newDataArr);    
    //         }
    //     }        

    //     sortData();
    // }, [selectedSortOrderStr])
    

    return (
        <>
            { 
                isLoading 
                ? <h1>Loading...</h1>
                :   <main>
                        <Controls 
                            typeDataArr={typeDataArr} 
                            selectedTypeStr={selectedTypeStr} 
                            setSelectedTypeStr={setSelectedTypeStr}
                            selectedSortOrderStr={selectedSortOrderStr}
                            setSelectedSortOrderStr={setSelectedSortOrderStr}
                        />

                        <DisplayList dataArr={dataArr}/> 
                    </main>
            }
        </>
    )
}
