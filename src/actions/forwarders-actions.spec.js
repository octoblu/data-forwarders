import chai, { expect } from 'chai';
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../constants/action-types'
import * as actions from './forwarders.actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_FORWARDERS_SUCCESS when fetching forwarders has been done', () => {
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
  })
})
