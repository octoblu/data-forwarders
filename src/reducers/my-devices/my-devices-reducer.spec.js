import chai, { expect } from 'chai';

import * as types from '../../constants/action-types'
import * as actions from '../../actions/types/types-actions'

import reducer from './my-devices-reducer'

describe('Reducer: My Devices', () => {
  it('should return the initial state', () => {
    const initialState = {
      items: [],
      error: null,
      fetching: false
    };

    expect(reducer(undefined, {})).to.deep.equal(initialState)
  })

  it('should handle FETCH_MY_DEVICES_REQUEST', () => {
    expect(reducer(undefined, { type: types.FETCH_MY_DEVICES_REQUEST }))
      .to.deep.equal({
       items: [],
       error: null,
       fetching: true
     })
  })

  it('should handle FETCH_MY_DEVICES_SUCCESS', () => {
    const devices = [
      { name: 'types-1' },
      { name: 'types-2' }
    ];
    expect(reducer(undefined, { type: types.FETCH_MY_DEVICES_SUCCESS, devices }))
      .to.deep.equal({
        items: devices,
        error: null,
        fetching: false
      })
  });

  it('should handle FETCH_MY_DEVICES_FAILURE', () => {
    expect(reducer(undefined, {
      type: types.FETCH_MY_DEVICES_FAILURE,
      error: new Error('Bad Request')
    }))
    .to.deep.equal({
      items: [],
      error: new Error('Bad Request'),
      fetching: false
    });
  });
})
