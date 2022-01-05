export async function fetchSWAPI(arg){
    return await fetch(`https://swapi.dev/api/${arg}`).then(r => r.json())
}
