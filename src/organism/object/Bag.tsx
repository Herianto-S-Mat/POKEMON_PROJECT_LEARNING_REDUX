import use from '/use.svg' 
import load from '/load.gif' 
import { useDispatch, useSelector } from 'react-redux';
import { playerType } from '../../resource/reduxStore/reducers/Player';

const BerryBagCard: React.FC<{berry: any, dispatchPlayer: any}> = ({berry, dispatchPlayer}) => {
    return (
        <div
          style={{
            backgroundColor:'rgba(0,0,0,.4)',
            color:'white',
            border:'1px solid',
            display: 'flex',
            flexDirection: 'column',
            gap: '.1em',
            padding: '5px',
            borderRadius: '5px',
            position: 'relative',
          }}
        >
          {
            berry.total!=0 &&
            <div style={{position: 'absolute', top: '2px', right: '8px', color:'black'}}>{berry.total}</div>
          }
          <div
            style={{
              backgroundColor:'rgba(250,250,250,.8)',
              borderRadius: '5px',
              minWidth: '6em',
            }}
          >
            <img src={berry?.image??load} alt={berry.name} style={{height:'5em', margin:'auto'}}/>
          </div>
          <div style={{  display: 'flex', gap: '5px', alignItems: 'center', justifyContent:'space-between',paddingTop:'5px'}}>
            <h3>{berry.name}</h3>
            <img src={use} height='20' alt='Add'  style={{borderRadius: '5px', backgroundColor: 'white'}}  onClick={() => dispatchPlayer({type: 'USE_BERRY', berry})}/>
          </div>
        </div>
      );
  }

  
  const ItemBagCard: React.FC<{item: any, dispatchPlayer: any}> = ({item, dispatchPlayer}) => {
    return (
        <div
          style={{
            backgroundColor:'rgba(0,0,0,.4)',
            color:'white',
            border:'1px solid',
            display: 'flex',
            flexDirection: 'column',
            gap: '.1em',
            padding: '5px',
            borderRadius: '5px',
            position: 'relative',
          }}
        >
          {
            item.total!=0 &&
            <div style={{position: 'absolute', top: '2px', right: '8px', color:'black'}}>{item.total}</div>
          }
          <div
            style={{
              backgroundColor:'rgba(250,250,250,.8)',
              borderRadius: '5px',
              minWidth: '6em',
            }}
          >
            <img src={item?.image??load} alt={item.name} style={{height:'5em', margin:'auto'}}/>
          </div>
          <div style={{  display: 'flex', gap: '5px', alignItems: 'center', justifyContent:'space-between',paddingTop:'5px'}}>
            <h3>{item.name}</h3>
            <img src={use} height='20' alt='Add'  style={{borderRadius: '5px', backgroundColor: 'white'}}  onClick={() => dispatchPlayer({type: 'USE_ITEM', item})}/>
          </div>
        </div>
      );
  }
  
  export const ItemBag = () => {
    const player = useSelector((state: { player?: playerType }) => state.player);
    const dispatchPlayer = useDispatch()
    return (
      <div style={{display:'flex',  gap:'1em', flexWrap:'wrap', width:'100%'}}>
          {player?.bag.item.map((item, index:number) => (
            <ItemBagCard key={index} item={item} dispatchPlayer={dispatchPlayer} />
          ))}
      </div>
    )
  }

  export const BerryBag = () => {
    const player = useSelector((state: { player?: playerType }) => state.player);
    const dispatchPlayer = useDispatch()
    return (
      <div style={{display:'flex',  gap:'1em', flexWrap:'wrap', width:'100%'}}>
          {player?.bag.berry.map((berry, index:number) => (
            <BerryBagCard key={index} berry={berry} dispatchPlayer={dispatchPlayer} />
          ))}
      </div>
    )
  }

  const Bag = () => {
    return (
    <>
      <h3>berry:</h3>
      <BerryBag/>
      <h3>item:</h3>
      <ItemBag/>
    </>
    )
  }
  export default Bag;