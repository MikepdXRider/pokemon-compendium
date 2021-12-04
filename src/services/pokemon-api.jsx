// This is where fetch functions live. Services folder holds any code that is responsible for interacting with services outside of this system/application.

import mungeData from "../utils/mungeData.jsx";


/**
 * Fetches API data
 *
 * @return {Array.<object>} data.
 */
export async function fetchAPIData() {
    const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');

    const dataObj = await response.json()
   
    const mungedData = dataObj.results.map(childDataObj => mungeData(childDataObj))

    return mungedData;
}

/**
 * Fetches API Type data
 *
 * @return {Array.<object>} type data.
 */
export async function fetchAPITypeData() {
    const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');

    const typeDataArr = await response.json();
    
    const mungedTypeDataArr = typeDataArr.map(typeDataObj => typeDataObj.type);
    
    return mungedTypeDataArr;
}

/**
 * Fetches API data by type
 *
 * @param {string} typeStr - user selected type from filter form component.
 * @return {Array.<object>} data by type.
 */
export async function fetchAPIDataByType(typeStr) {
    const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${typeStr}`);
    
    const dataObj = await response.json();

    const mungedData = dataObj.results.map(childDataObj => mungeData(childDataObj))

    return mungedData;
}

/**
 * Fetches API data by order
 *
 * @param {string} sortOrderStr - user selected order from sort form component.
 * @return {Array.<object>} data by order.
 */
export async function fetchAPIDataByOrder(sortOrderStr) {
    const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=${sortOrderStr}`);

    const dataObj = await response.json();

    const mungedData = dataObj.results.map(childDataObj => mungeData(childDataObj))

    return mungedData;
}
