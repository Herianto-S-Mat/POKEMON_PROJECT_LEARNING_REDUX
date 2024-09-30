import { useDispatch, useStore } from 'react-redux';
import Pokemon from '../../organism/object/PokemonCard'
import Team from '../../organism/object/Team';
import { HistoryType } from '../../resource/reduxStore/reducers/History';
import { getLists } from '../../resource/data';
import { useEffect, useState } from 'react';

interface unitObject {
  name: string;
  url:string;
} 
type berryType = {
  next: string;
  previous: string;
  lists: unitObject[];
}

function Fill() {
  const [pokemons, setPokemons] = useState<berryType|undefined>()
  const state: {history?: HistoryType} = useStore().getState()
  const dispatch = useDispatch()
  const storePokemons = (url: string) => {
      getLists(url)
      .then(
          (data)=> {
              setPokemons(data as berryType)
              dispatch({type: 'SET_POKEMONS', url})
          }
      )
  }
  useEffect(()=>{
      storePokemons(state.history?.Pokemons??`${import.meta.env.VITE_API_1}/pokemon?limit=30`)
  },[])
  return (
    <>
      {(pokemons != undefined) && 
        <>
          { 
            pokemons.previous &&
            <button
              style={{fontSize:'2em', }}
              onClick={()=>{storePokemons(pokemons.previous)}}
            >previous</button>
          }
          <div style={{display:'flex', justifyContent:'center', alignItems:'self-start', flexWrap:'wrap', alignContent:'start'}}>
            {pokemons.lists.map((pokemon, i)=>(
              <Pokemon key={i} data={pokemon} />
            ))}
          </div>
          {
            pokemons.next &&
            <button 
              style={{fontSize:'2em', }}
              onClick={()=>{storePokemons(pokemons.next)}}
            >next</button>
          }
        </>
      }
    </>
  )
}

export default function PokemonPage() {
  return (
    <>
      <h1>Pokemon Team</h1>
      <Team/>
      <h1>Pokemon Store</h1>
      <Fill/>
    </>
  )
}





