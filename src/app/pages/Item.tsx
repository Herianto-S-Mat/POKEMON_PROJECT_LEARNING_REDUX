import { useEffect, useState } from 'react';
import {ItemBag} from '../../organism/object/Bag';
import Item from '../../organism/object/ItemCard'
import { HistoryType } from '../../resource/reduxStore/reducers/History';
import { useDispatch, useStore } from 'react-redux';
import { getLists } from '../../resource/data';

interface unitObject {
  name: string;
  url:string;
} 
type itemType = {
  next: string;
  previous: string;
  lists: unitObject[];
}

function Fill() {
  const [items, setItems] = useState<itemType|undefined>()
  const state: {history?: HistoryType} = useStore().getState()
  const dispatch = useDispatch()
  const storeItems = (url: string) => {
    getLists(url)
    .then(
        (data)=> {
            setItems(data as itemType)
            dispatch({type: 'SET_ITEMS', url})
        }
    )
  }
  useEffect(()=>{
      storeItems(state.history?.Items??`${import.meta.env.VITE_API_1}/item?limit=30`)
  },[])

  return (
    <>
      {(items != undefined) && 
        <>
          { 
            items.previous &&
            <button
              style={{fontSize:'2em', marginBottom:'1em'}}
              onClick={()=>{storeItems(items.previous)}}
            >previous</button>
          }
          <div style={{display:'flex',gap:'1em', justifyContent:'center', alignItems:'self-start', flexWrap:'wrap', alignContent:'start'}}>
            {items.lists.map((item, i:number)=>(
              <Item key={i} data={item} />
            ))}
          </div>
          { 
            items.next &&
            <button
              style={{fontSize:'2em', marginTop:'1em'}}
              onClick={()=>{storeItems(items.next)}}
            >next</button>
          }
        </>
      }
    </>
  )
}

export default function ItemPage() {
  return(
    <>
      <h1>Item in Bag</h1>
      <ItemBag/>
      <h1>Item Store</h1>
      <Fill/>
    </>
  )
}