import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import reducers from '../reducers/';

export default function(data) {
  let finalCreateStore;
  let store;
  let middleware = [ThunkMiddleware];

  if (process.env.NODE_ENV === 'production') {
    finalCreateStore = applyMiddleware(...middleware)(createStore);
  } else {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      require('redux-devtools').devTools(),
      require('redux-devtools').persistState(
        window.location.href.match(/[?&]debug_session=([^&]+)\b/)
      ),
      createStore
    );
  }

  store = finalCreateStore(reducers, data);
  return store;
}
