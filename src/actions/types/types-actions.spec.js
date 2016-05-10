import chai, { expect } from 'chai';
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../../constants/action-types'
import * as actions from './types-actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Action: Types', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should create FETCH_TYPES_SUCCESS when request is successful', () => {
    nock('https://forwarder-service.octoblu.dev')
      .get('/types')
      .reply(200, [{ name: 'type-1' }, { name: 'type-2'}])

    const expectedActions = [
      { type: types.FETCH_TYPES_REQUEST },
      { type: types.FETCH_TYPES_SUCCESS, forwarderTypes: [{ name: 'type-1' }, { name: 'type-2'}]}
    ]

    const store = mockStore({ types: [] })

    return store.dispatch(actions.fetchTypes())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
  });

  it('should create FETCH_TYPES_FAILURE when request fails', () => {
    nock('https://forwarder-service.octoblu.dev')
      .get('/types')
      .reply(400)

    const expectedActions = [
      { type: types.FETCH_TYPES_REQUEST },
      { type: types.FETCH_TYPES_FAILURE, error: new Error('Bad Request') }
    ]

    const store = mockStore({ types: [] })

    return store.dispatch(actions.fetchTypes())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
  })

  it('should create an action to set active forwarder type', () => {
    const forwarderTypes = [{ id: 'Prince' }, { id: 'The-Time' }]
    const forwarderTypeId = 'The-Time'

    const expectedAction = {
      type: types.SET_ACTIVE_FORWARDER_TYPE,
      forwarderTypes,
      forwarderTypeId
    }

    expect(actions.setActiveForwarderType(forwarderTypes, forwarderTypeId)).to.deep.equal(expectedAction)
  })

  it('should create an action to unset active forwarder type', () => {
    const expectedAction = {
      type: types.UNSET_ACTIVE_FORWARDER_TYPE,
    }

    expect(actions.unsetActiveForwarderType()).to.deep.equal(expectedAction)
  })
})
