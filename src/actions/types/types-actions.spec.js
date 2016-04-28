import chai, { expect } from 'chai';
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../../constants/action-types'
import * as actions from './types-actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe.only('Action: Types', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should create FETCH_TYPES_SUCCESS when request is successful', () => {
    nock('https://forwarder.octoblu.dev')
      .get('/types')
      .reply(200, { body: { types: ['type-1', 'type-2'] }})

    const expectedActions = [
      { type: types.FETCH_TYPES_REQUEST },
      { type: types.FETCH_TYPES_SUCCESS, body: { types: ['type-1', 'type-2'] } }
    ]

    const store = mockStore({ types: [] })

    return store.dispatch(actions.fetchTypes())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
  });

  it('should create FETCH_TYPES_FAILURE when request fails', () => {
    nock('https://forwarder.octoblu.dev/')
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
})
