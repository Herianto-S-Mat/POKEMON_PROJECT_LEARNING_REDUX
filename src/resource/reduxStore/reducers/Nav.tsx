export interface ActionType {
    type: 'SHOW'|'HIDE';
    Value?: boolean;
  }

  const navReducer: React.Reducer<Boolean, ActionType> = (state = true, action) => {
    switch (action.type) {
        case 'SHOW':
            return true;
        case 'HIDE':
            return false;
        default:
            return state;
    }
};

export default navReducer;