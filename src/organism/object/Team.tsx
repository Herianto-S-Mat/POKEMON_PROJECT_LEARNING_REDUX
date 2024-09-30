import see from '/aye.svg' 
import trash from '/trash.svg' 
import load from '/load.gif' 
import { ModalFiller } from './PokemonCard';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { playerType } from '../../resource/reduxStore/reducers/Player';


const PokemonTeamCard: React.FC<{pokemon: any, dispatchPlayer: any}> = ({pokemon, dispatchPlayer}) => {
    const dispatch = useDispatch();

    const showToModal = () =>  {
        if (pokemon !== null) {
          dispatch({type: 'SET_MODAL', content:{type: 'pokemon', children: <ModalFiller pokemon={pokemon} />}});
        }
    };
    return(
        <div style={{
            flexGrow: 1,
            height: 'max-content',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '.5em',
            margin: '.2em',
            border: '1px solid',
            padding: '5px',
            borderRadius: '5px',
            backgroundColor: `rgba(0,0,0)`,
            color: 'white',
          }}>
            <div style={{marginLeft: 'auto', height:'1em', position:'relative'}}>
            <img src={trash} height='20' style={{position:'absolute', right:'0', top:'0', backgroundColor:'white'}}  onClick={() => dispatchPlayer({type: 'REMOVE_TEAM', pokemon})}/>
            </div>
            <img src={pokemon?.image.gif ?? load} alt={pokemon.name} style={{height: '5em', margin: 'auto'}}/>
            <h3 style={{
              textWrap: 'nowrap',
              padding: '.2em',
              margin: 'auto',
            }}>
              {pokemon.name} 
              <img src={see} height='20' style={{marginLeft: '.2em', backgroundColor:'white'}} onClick={showToModal}/>
            </h3>
          </div>
    )
}

const Team = () => {
    // const {player, dispatchPlayer} = usePlayerContext()
    const store = useStore();
    const player = useSelector((state: { player?: playerType }) => state.player);
    const dispatchPlayer = store.dispatch
  return (
    <div style={{display:'flex',  gap:'1em', flexWrap:'wrap', width:'100%'}}>
        {player?.team.map((pokemon, index:number) => (
            <PokemonTeamCard key={index} pokemon={pokemon} dispatchPlayer={dispatchPlayer} />
        ))}
    </div>
  )
}

export default Team;