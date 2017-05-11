import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxTrunk from 'redux-thunk';
// import reducer from './view/reducers';
// import TodoList from './view/TodoList';
// import TodoList from './myComponents/TodoList';
// import reducer from './myComponents/reducers';
import reducer from './reducers/reducers';
import ReduxApp from './components/ReduxApp';
const store = createStore(
  reducer,
  compose(
    applyMiddleware(ReduxTrunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default () => (
  <Provider store={store}>
    <ReduxApp/>
  </Provider>
);
