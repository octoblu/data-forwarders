import reducers from '../reducers/';
import ThunkMiddleware from 'redux-thunk';
import PromiseMiddleware from 'redux-promise-middleware';
import { createHistory } from 'history';
import { reduxReactRouter } from 'redux-react-router';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { devTools } from 'redux-devtools';

export default function(data) {
  let finalCreateStore;
  let store;
  let middleware = [ThunkMiddleware, PromiseMiddleware];

  if (process.env.NODE_ENV === 'production') {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      reduxReactRouter({ createHistory })
    )(createStore);
  } else {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      reduxReactRouter({ createHistory }),
      devTools()
    )(createStore);
  }

  store = finalCreateStore(reducers);
  return store;
}
