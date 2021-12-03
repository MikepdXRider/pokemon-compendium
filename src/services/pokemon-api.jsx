// This is where fetch functions live. Services folder holds any code that is responsible for interacting with services outside of this system/application.

export default async function fetchAPIData() {
    const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');

    const data = await response.json()
    return data.results
}
