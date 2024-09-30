import { useEffect, useState } from 'react';
import {BerryBag } from '../../organism/object/Bag';
import Berry from '../../organism/object/BerryCard'
import { HistoryType } from '../../resource/reduxStore/reducers/History';
import { useDispatch, useStore } from 'react-redux';
import { getLists } from '../../resource/data';

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
  const [berrys, setBerrys] = useState<berryType|undefined>()
  const state: {history?: HistoryType} = useStore().getState()
  const dispatch = useDispatch()
  const storeBerrys = (url: string) => {
    getLists(url)
    .then(
        (data)=> {
            setBerrys(data as berryType)
            dispatch({type: 'SET_BERRYS', url})
        }
    )
  }
  useEffect(()=>{
      storeBerrys(state.history?.Berrys??`${import.meta.env.VITE_API_1}/berry?limit=30`)
  },[])

  return (
    <>
      {(berrys != undefined) && 
        <>
          { 
            berrys.previous &&
            <button
              style={{fontSize:'2em', marginBottom:'1em'}}
              onClick={()=>{storeBerrys(berrys.previous)}}
            >previous</button>
          }
          <div style={{display:'flex',gap:'1em', justifyContent:'center', alignItems:'self-start', flexWrap:'wrap', alignContent:'start'}}>
            {berrys.lists.map((berry, i:number)=>(
              <Berry key={i} data={berry} />
            ))}
          </div>
          { 
            berrys.next &&
            <button
              style={{fontSize:'2em', marginTop:'1em'}}
              onClick={()=>{storeBerrys(berrys.next)}}
            >next</button>
          }
        </>
      }
    </>
  )
}

export default function BerryPage() {
  return(
    <>
      <h1>Barry in Bag</h1>
      <BerryBag/>
      <h1>Berry Store</h1>
      <Fill/>
    </>
  )
}