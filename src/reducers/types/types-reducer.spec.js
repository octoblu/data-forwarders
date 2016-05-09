import chai, { expect } from 'chai';

import * as types from '../../constants/action-types'
import * as actions from '../../actions/types/types-actions'

import reducer from './types-reducer'

describe('Reducer: Types', () => {
  it('should return the initial state', () => {
    const initialState = {
      items: [],
      error: null,
      fetching: false
    };

    expect(reducer(undefined, {})).to.deep.equal(initialState)
  })

  it('should handle FETCH_TYPES_REQUEST', () => {
    expect(reducer(undefined, { type: types.FETCH_TYPES_REQUEST }))
      .to.deep.equal({
       items: [],
       error: null,
       fetching: true
     })
  })

  it('should handle FETCH_TYPES_SUCCESS', () => {
    const items = [
      { name: 'types-1' },
      { name: 'types-2' }
    ];
    expect(reducer(undefined, { type: types.FETCH_TYPES_SUCCESS, forwarderTypes: items }))
      .to.deep.equal({
        items,
        error: null,
        fetching: false
      })
  });

  it('should handle FETCH_TYPES_FAILURE', () => {
    expect(reducer(undefined, {
      type: types.FETCH_TYPES_FAILURE,
      error: new Error('Bad Request')
    }))
    .to.deep.equal({
      items: [],
      error: new Error('Bad Request'),
      fetching: false
    });
  });
})
