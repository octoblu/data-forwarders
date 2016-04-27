import chai, { expect } from 'chai';
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../constants/action-types'
import * as actions from './forwarders-actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Forwarder Actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should create FETCH_FORWARDERS_SUCCESS when request is successful', () => {
    nock('http://example.com/')
      .get('/forwarders')
      .reply(200, { body: { forwarders: ['do something'] }})

    const expectedActions = [
      { type: types.FETCH_FORWARDERS_REQUEST },
      { type: types.FETCH_FORWARDERS_SUCCESS, body: { forwarders: ['do something']  } }
    ]

    const store = mockStore({ forwarders: [] })

    return store.dispatch(actions.fetchForwarders())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
  });

  it('should create FETCH_FORWARDERS_FAILURE when request fails', () => {
    nock('http://example.com/')
      .get('/forwarders')
      .reply(400)

    const expectedActions = [
      { type: types.FETCH_FORWARDERS_REQUEST },
      { type: types.FETCH_FORWARDERS_FAILURE, error: new Error('Bad Request') }
    ]

    const store = mockStore({ forwarders: [] })

    return store.dispatch(actions.fetchForwarders())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
  })
})
