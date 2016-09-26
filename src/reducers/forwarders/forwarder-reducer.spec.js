import chai, { expect } from 'chai';
import * as types from '../../constants/action-types'
import * as actions from '../../actions/forwarders/forwarders-actions'

import reducer from './forwarder-reducer'

describe('Reducer: Forwarder', () => {
  it('should return the initial state', () => {
    const initialState = {
      items: [],
      error: null,
      fetching: false,
      selected: null
    };

    expect(reducer(undefined, {})).to.deep.equal(initialState)
  })

  it('should handle FETCH_FORWARDERS_REQUEST', () => {
    expect(reducer(undefined, { type: types.FETCH_FORWARDERS_REQUEST }))
      .to.deep.equal({
       items: [],
       error: null,
       fetching: true,
       selected: null
     })
  })

  it('should handle FETCH_FORWARDERS_SUCCESS', () => {
    const items = [
      { name: 'Forwarder 1' },
      { name: 'Forwarder 2' }
    ];
    expect(reducer(undefined, { type: types.FETCH_FORWARDERS_SUCCESS, forwarders: items }))
      .to.deep.equal({
        items,
        error: null,
        fetching: false,
        selected: null
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
      fetching: false,
      selected: null
    });
  });
})
