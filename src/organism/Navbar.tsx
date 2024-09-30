import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { forNavBar } from '../app/routerPages';
// import { useNavShowContext } from '../resource/context/NavShow';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const  nav = useSelector((state: { nav?: boolean }) => state.nav);
    const location:string = useLocation().pathname;
    return (
        <div style={{padding:'.2em', display:'flex',  flexDirection:'column', backgroundColor:'rgba(200,200,200,.8)'}}>
        {nav && forNavBar.map((nav, i:number) => (
            <Link to={nav.path} key={i}>
            <img src={nav.icon} alt="" style={{height:'2em', padding:'1em',backgroundColor:`rgba(0,0,0,.${(location==nav.path)?'4':'8'})`, borderRadius:'1em'}}/>
            </Link>
        ))}
        </div>
    )
}

export default Navbar