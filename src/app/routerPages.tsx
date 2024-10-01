import HomePage from './pages/Home'
import BerryPage from './pages/Berry'
import PokemonPage from './pages/Pokemon'

import iconHome from '/navbarIcon/home.png' 
import iconBerry from '/navbarIcon/berry.svg' 
import iconItem from '/navbarIcon/item.svg' 
import iconPokemon from '/navbarIcon/pokemon.svg' 
import Page from '../organism/Page'
import ItemPage from './pages/Item'



interface forNavBarType {
    path:string;
    icon:string;
}

interface pageType extends forNavBarType{
    element:JSX.Element;
    errorElement:JSX.Element;
}

const pages:pageType[] = [
    {
        path:'/',
        element:<Page><HomePage/></Page>,
        errorElement:<Page><h1>error</h1></Page>,
        icon: iconHome,

    },
    {
        path:'/pokemon',
        element:<Page><PokemonPage/></Page>,
        errorElement:<Page><h1>error</h1></Page>,
        icon: iconPokemon,
    },
    {
        path:'/berry',
        element:<Page><BerryPage/></Page>,
        errorElement:<Page><h1>error</h1></Page>,
        icon: iconBerry,
    },
    {
        path:'/item',
        element: <Page><ItemPage/></Page>,
        errorElement:<Page><h1>error</h1></Page>,
        icon: iconItem,
    },
]

export const forNavBar = pages.map(
    (page)=>({
        path: page.path,
        icon: page.icon,
      })
)   


export default pages