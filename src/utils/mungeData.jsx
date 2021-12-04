
export default function mungeData(dataObj) {
    return {
        pokemon: dataObj.pokemon,
        url_image: dataObj.url_image,
        hp: dataObj.hp,
        base_experience: dataObj.base_experience,
        type_1: dataObj.type_1
    }
}
