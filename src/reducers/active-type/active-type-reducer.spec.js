import chai, { expect } from 'chai';

import * as types from '../../constants/action-types'
import * as actions from '../../actions/types/types-actions'

import reducer from './active-type-reducer'

describe('Reducer: Active Forwarder Type', () => {
  it('should handle SET_ACTIVE_FORWARDER_TYPE', () => {
    expect(reducer(undefined, {
      type: types.SET_ACTIVE_FORWARDER_TYPE,
      forwarderTypes: [
        { name: 'Purple Rain', deviceType: 'purple-rain' },
        { name: 'Raspberry Beret', deviceType: 'raspberry-beret'}
      ],
      forwarderTypeId: 'purple-rain'
    }))
    .to.deep.equal({ name: 'Purple Rain', deviceType: 'purple-rain' });
  });

  it('should handle UNSET_ACTIVE_FORWARDER_TYPE', () => {
    expect(reducer(undefined, {
      type: types.UNSET_ACTIVE_FORWARDER_TYPE,
    }))
    .to.equal(null);
  });
})
