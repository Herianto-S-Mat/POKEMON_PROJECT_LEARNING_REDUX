import { useDispatch, useSelector } from 'react-redux';
// import { useNavShowContext } from '../resource/context/NavShow';

const Header: React.FC<{}> = () => {
    // const {navMinimize, setNavMinimize} = useNavShowContext();
    const dispatch = useDispatch();
    const nav = useSelector((state: { nav?: boolean }) => state.nav);
    return(
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '5em',paddingInline:'1em', borderBottom:'.1em solid black', backgroundColor:'rgba(200,200,200,.8)'}}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.4em' }} onClick={()=>{dispatch({type:!nav ? 'SHOW' : 'HIDE'})}}>
          <span style={{ width: '3em', height: '.3em', backgroundColor: 'black', borderRadius: '.3em' }}></span>
          <span style={{ width: '3em', height: '.3em', backgroundColor: 'black', borderRadius: '.3em' }}></span>
          <span style={{ width: '3em', height: '.3em', backgroundColor: 'black', borderRadius: '.3em' }}></span>
        </div>
        <h1 style={{ fontSize: '3em', textTransform: 'uppercase', textAlign: 'center', flexGrow: 1 }}>pokemon</h1>
      </header>
    )
  }
  export default Header