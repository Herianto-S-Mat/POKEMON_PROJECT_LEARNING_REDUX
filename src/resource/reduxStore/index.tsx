//sudah depreceted makanya perlu legacy agar tidak warning
import { legacy_createStore as createStore, combineReducers } from 'redux';
import playerReducer from './reducers/Player';
import modalReducer from './reducers/Modal';
import navReducer from './reducers/Nav';
import historyReducer from './reducers/History';

const reducers = {
  player: playerReducer,
  modal: modalReducer,
  nav: navReducer,
  history: historyReducer,
}

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

import { Provider } from 'react-redux';

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;