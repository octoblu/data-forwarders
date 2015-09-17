import _ from 'lodash';
import * as types from '../constants/action-types';
import stores from "../config/data-stores";

var initialState = stores;

module.exports = function(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
