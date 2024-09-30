interface teamType {
    name: string;
    image:{
        svg:string|null,
        gif:string|null,
    },
    abilities:string[],
    stats:{
        base_stat:number,
        effort:number,
        stat:object
    }|null
  } 
interface berryType {
    name: string;
    img:string;
    total:number;
}
interface itemType {
    name: string;
    img:string;
    total:number;
}

export interface playerType {
    team: teamType[];
    bag: {berry:berryType[], item:itemType[]};
}

const initialPlayer: playerType = {
    team: [],
    bag: {
        berry: [], 
        item: []
    } 
  } as playerType;
export interface ActionType {
    type: string;
    pokemon?: any;
    berry?: any;
    item?: any;
  }

const playerReducer:React.Reducer<playerType, ActionType> = (state = initialPlayer, action) => {
    switch (action.type) {
        case 'ADD_TEAM':
            const existingPokemon = state.team.find(pokemon => pokemon.name === action.pokemon.name);
            if (existingPokemon || state.team.length >= 5) {
                return state;
            }
            return { ...state, team: [...state.team, action.pokemon] };
        case 'REMOVE_TEAM':
            return { ...state, team: state.team.filter(pokemon => pokemon.name !== action.pokemon.name) };
        case 'ADD_BERRY':
            const existingBerry = state.bag.berry.find(berry => berry.name === action.berry.name);
            if (existingBerry) {
                return {
                ...state,
                bag: {
                    ...state.bag,
                    berry: state.bag.berry.map(berry => {
                    if (berry.name === action.berry.name) {
                        return { ...berry, total: berry.total + 1 };
                    }
                    return berry;
                    })
                }
                };
            } else {
                return { ...state, bag: { ...state.bag, berry: [...state.bag.berry, { ...action.berry, total:1}] } };
            }
        case 'USE_BERRY':
            return { 
                ...state, 
                bag: { 
                    ...state.bag, 
                    berry: state.bag.berry.map(berry => {
                        if (berry.name === action.berry.name) {
                            return { ...berry, total: berry.total - 1 };
                        }
                        return berry;
                    })
                    .filter(berry => berry.total >= 1)
                }
            }
        case 'ADD_ITEM':
            const existingItem = state.bag.item.find(item => item.name === action.item.name);
            if (existingItem) {
                return {
                    ...state,
                    bag: {
                    ...state.bag,
                    item: state.bag.item.map(item => {
                        if (item.name === action.item.name) {
                        return { ...item, total: item.total + 1 };
                        }
                        return item;
                    })
                    }
                };
            } else {
                return { ...state, bag: { ...state.bag, item: [...state.bag.item, { ...action.item, total:1}] } };
            }
        case 'USE_ITEM':
            return {
                ...state,
                bag: {
                ...state.bag,
                item: state.bag.item.map(item => {
                    if (item.name === action.item.name) {
                    return { ...item, total: item.total - 1 };
                    }
                    return item;
                })
                .filter(item => item.total >= 1)
                }
            }
        default:
            return state;
    }
  };

export default playerReducer;