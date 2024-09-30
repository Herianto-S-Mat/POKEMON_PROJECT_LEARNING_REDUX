export interface HistoryType {
    Pokemons: string; 
    Berrys: string; 
    Items: string; 
  }

  
  const initilalHistory: HistoryType = {
    Pokemons: `${import.meta.env.VITE_API_1}/pokemon?limit=30`,
    Berrys: `${import.meta.env.VITE_API_1}/berry?limit=30`,
    Items: `${import.meta.env.VITE_API_1}/item?limit=30`,
  }
  
  export interface ActionType {
      type: 'SET_POKEMONS' | 'SET_BERRYS'|'SET_ITEMS';
      url?: HistoryType;
    }
  const historyReducer: React.Reducer<HistoryType, ActionType> = (state = initilalHistory, action: ActionType) => {
    switch (action.type) {
        case 'SET_POKEMONS':
            return action.url??state;
        case 'SET_BERRYS':
            return action.url??state;
        case 'SET_ITEMS':
              return action.url??state;
        default:
            return state;
    }
};

export default historyReducer;