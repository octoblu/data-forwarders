import ThunkMiddleware from 'redux-thunk'
import reducers from '../reducers/';
import { createHistory } from 'history';
import { reduxReactRouter } from 'redux-react-router';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { devTools } from 'redux-devtools';

export default function(data) {
  let finalCreateStore;
  let store;
  let middleware = [ThunkMiddleware];

  finalCreateStore = compose(
    applyMiddleware(...middleware),
    reduxReactRouter({ createHistory }),
    devTools()
  )(createStore);

  store = finalCreateStore(reducers);
  return store;
}
