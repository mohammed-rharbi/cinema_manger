
async function fetchit() {

    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        const data = await res.json();
        console.log('Data:', data);
    } catch (error) {
        console.error('Error', error);
    }
}

fetchit();




function fetchit() {

    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.json().results)
        .then(data => {
            
            return data.map(pokemon => pokemon.name );
        })
        .then(names => console.log(names.join(',')))
        .catch(error => {
            console.error('Error', error);
        });
}

fetchit();
