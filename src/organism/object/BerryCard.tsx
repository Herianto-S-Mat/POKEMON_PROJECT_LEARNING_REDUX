import { useEffect, useState } from "react";
import { imageBerry } from "../../resource/data";
import add from '/add.svg' 
import load from '/load.gif' 
import { useDispatch, useSelector } from "react-redux";
import { playerType } from "../../resource/reduxStore/reducers/Player";

export interface unitObjectType {
    name: string;
    url:string;
  }
  
  
const Berry: React.FC<{ data: unitObjectType }> = ({ data }) => {
  const [berry, setBerry] = useState<{name:string, image: string|null}>({name:'', image: null});
  const player = useSelector((state: { player?: playerType }) => state.player);
  const dispatchPlayer = useDispatch();
  useEffect(()=>{
    setBerry({name: data.name, image: null});
    imageBerry(data.url)
    .then(
      (result)=> {setBerry({name: data.name, image: result})},
    )
  },[data]);

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
          player?.bag.berry.filter(berry => berry.name === data.name).length!=0 &&
          <div style={{position: 'absolute', top: '2px', right: '8px', color:'black'}}>{player?.bag.berry.find(berry => berry.name === data.name)?.total}</div>
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
          <img src={add} height='20' alt='Add'  style={{borderRadius: '5px', backgroundColor: 'white'}}  onClick={() => dispatchPlayer({type: 'ADD_BERRY', berry})}/>
        </div>
      </div>
    );
  };

  export default Berry