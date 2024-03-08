let poke:{
    id: number,
    name: string,
    image: string,
    type: string
};

let pokemons: {
    id: number,
    name: string,
    image: string,
    type: string
}[] = [];

function template(pokeItem: {
    id: number,
    name: string,
    image: string,
    type: string
}){
    return `
    <div class="card shadow">
            <div class=" number">#$1</div>
            <img src="./img/pokemon-01.jpg" class="card-img-top" alt="...">
            <div class="card-body">

            </div>
          </div>
    
    `;
}

async function fetchData(root:HTMLElement){
    for(let i = 1; i<= 20; i++){
        let data: Response = await fetch('');
        let pokemon : any = await data.json();

        let {name: pokename, url} = pokemon.abilities[0].abilitity;
    }
}