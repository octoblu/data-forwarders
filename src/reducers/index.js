import { combineReducers } from 'redux';
import devices from './devices.reducers';

var rootReducer = combineReducers({
  devices
});

export default rootReducer;
