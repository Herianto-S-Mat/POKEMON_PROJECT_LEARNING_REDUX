type Store = {
    next: string | null;
    previous: string | null;
    lists: [];
  };

const options: object =  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
  }
export const getLists = async (resource:string): Promise<Store> => {
    try {
        console.log('masuk')
        const response = await fetch(resource, options);
        if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`)}
        const { next, previous, results } = await response.json();
        return {
            lists: results,
            next,
            previous,
        };
    } 
    catch (error) {
        return {
            lists: [],
            next:null,
            previous :null,
        }
    }
  };

interface detailPokemonType {
    image:{
        svg:string|null,
        gif:string|null,
    },
    abilities:string[],
    stats:{
        base_stat:number,
        effort:number,
        name:string,
    }[]|null
}
  
export const getDetailPokemon = async (resource:string): Promise<detailPokemonType> => {
    try {
        const response = await fetch(resource, options);
        if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`)}
        const data = await response.json();
        return {
            image:{
                svg:data.sprites.other.dream_world.front_default,
                gif:data.sprites.other.showdown.front_default,
            },
            abilities:data.abilities.map((ability:any)=> ability.ability.name),
            stats:data.stats.map((stat:any)=>({base_stat :stat.base_stat, effort :stat.effort, name:stat.stat.name }))
        }
    } 
    catch (error) {
        return {
            image:{
                svg:null,
                gif:null,
            },
            abilities:[],
            stats:null
        }
    }
};


export const imageBerry = async (resource:string): Promise<any> => {
try {
    const response = await fetch(resource, options);
    if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`)}
    const data = await response.json();
    const itemResponse = await fetch(data.item.url, options)
    if (!itemResponse.ok) { throw new Error(`HTTP error! Status: ${itemResponse.status}`)}
    const {sprites} =  await itemResponse.json();
    return sprites.default
}
catch (error) {
  console.error("Error fetching pokemon detail:", error);
  return null
}
};

export const imageItem = async (resource:string): Promise<any> => {
    try {
        const response = await fetch(resource, options)
        if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`)}
        const {sprites} =  await response.json();
        return sprites.default
    }
    catch (error) {
      console.error("Error fetching pokemon detail:", error);
      return null
    }
    };