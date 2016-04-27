import chai, { expect } from 'chai';
import * as types from '../constants/action-types'
import * as actions from '../actions/forwarders-actions'

import reducer from './forwarder-reducer'

describe('Forwarder Reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      items: [],
      error: null,
      fetching: false
    };

    expect(reducer(undefined, {})).to.deep.equal(initialState)
  })

  it('should handle FETCH_FORWARDERS_REQUEST', () => {
    expect(reducer(undefined, { type: types.FETCH_FORWARDERS_REQUEST }))
      .to.deep.equal({
       items: [],
       error: null,
       fetching: true
     })
  })

  it('should handle FETCH_FORWARDERS_SUCCESS', () => {
    const items = [
      { name: 'Forwarder 1' },
      { name: 'Forwarder 2' }
    ];
    expect(reducer(undefined, { type: types.FETCH_FORWARDERS_SUCCESS, body: items }))
      .to.deep.equal({
        items,
        error: null,
        fetching: false
      })
  });

  it('should handle FETCH_FORWARDERS_FAILURE', () => {
    expect(reducer(undefined, {
      type: types.FETCH_FORWARDERS_FAILURE,
      error: new Error('Bad Request')
    }))
    .to.deep.equal({
      items: [],
      error: new Error('Bad Request'),
      fetching: false
    });
  });
})
