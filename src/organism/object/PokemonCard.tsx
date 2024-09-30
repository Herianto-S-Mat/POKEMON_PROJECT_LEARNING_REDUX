import { useEffect, useState } from "react"
import { getDetailPokemon } from "../../resource/data"
import see from '/aye.svg' 
import add from '/add.svg' 
import load from '/load.gif' 
import { useDispatch, useSelector } from "react-redux"
import { playerType } from "../../resource/reduxStore/reducers/Player"


interface unitObject {
    name: string;
    url:string;
}

interface pokemonType {
  name: string;
  image:{
    svg:string|null,
    gif:string|null,
  }
  abilities:string[]
  stats:{
    base_stat:number,
    effort:number,
    name:string,
  }[]|null
}

export const ModalFiller: React.FC<{pokemon: pokemonType}> = ({pokemon}) => (
    <div style={{ padding: '1em', display: 'flex', flexDirection: 'column'}}>
      <h2 style={{alignSelf: 'end', width:'max-content'}}>{pokemon.name}</h2>
      <img src={pokemon?.image.svg??''} alt={pokemon.name} style={{ margin:'auto', maxHeight:'15em'}} />
      <p><b>{pokemon.abilities.join(', ')}</b></p>
      <div>
        {pokemon.stats?.map((stat, i: number) => (
          <div key={i}>
            {`${stat.name}: ${stat.base_stat}`}<br />
          </div>
        ))}
      </div>
    </div>
)

const PokemonCard: React.FC<{data: unitObject}> = ({data}) => {
  const [pokemon, setPokemon] = useState<pokemonType | null>(null);
  useEffect(() => {
    setPokemon(null);
    getDetailPokemon(data.url).then((result) => {
      setPokemon({...result, name: data.name});
    });
  }, [data]);

  // const {setModal} = useModalContext();
  const dispatch = useDispatch();
  const player = useSelector((state: { player?: playerType }) => state.player);

  const showToModal = () =>  {
      if (pokemon !== null) {
        dispatch({type: 'SET_MODAL', content:{type: 'pokemon', children: <ModalFiller pokemon={pokemon} />}});
      }
  };
  const pokemonTeam = player?.team.find(pokemonTeam => pokemonTeam.name === data.name); // Team 
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'space-between',
      gap: '.5em',
      margin: '.2em',
      border: '1px solid',
      padding: '5px',
      borderRadius: '5px',
      backgroundColor: `rgba(${!pokemonTeam ? '200,200,200,.8' : '250,250,250'})`,
    }}>
      <div style={{marginLeft: 'auto', height:'1em', position:'relative'}}>
        {
          !pokemonTeam &&
          <img src={add} height='20' style={{position:'absolute', right:'0', top:'0'}}  onClick={() => {console.log('cloick'); dispatch({type: 'ADD_TEAM', pokemon})}}/>
        }
      </div>
      <img src={pokemon?.image.gif ?? load} alt={data.name} style={{height: '5em', margin: 'auto'}}/>
      <h3 style={{
        textWrap: 'nowrap',
        padding: '.2em',
        margin: 'auto',
      }}>
        {data.name} 
        <img src={see} height='20' style={{marginLeft: '.2em'}} onClick={showToModal}/>
      </h3>
    </div>
  );
};

export default PokemonCard;