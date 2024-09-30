import { getLists } from './src/resource/data';


getLists('https://pokeapi.co/api/v2/item?limit=10')
.then(
    (data)=> console.log(data)
)