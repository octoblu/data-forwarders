import chai, { expect } from 'chai';
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../../constants/action-types'
import * as actions from './forwarders-actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Action: Forwarders', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should create FETCH_FORWARDERS_SUCCESS when request is successful', () => {
    nock('https://forwarder-service.octoblu.dev')
      .get('/forwarders')
      .reply(200, [
        { name: "T'Challa", type: "forwarder:vibranium" },
        { name: "Ororo", type: "forwarder:lightning" }
      ]);

    const forwarders = [
      { name: "T'Challa", type: "forwarder:vibranium" },
      { name: "Ororo", type: "forwarder:lightning" }
    ]

    const expectedActions = [
      { type: types.FETCH_FORWARDERS_REQUEST },
      { type: types.FETCH_FORWARDERS_SUCCESS, forwarders }
    ]

    const store = mockStore({ forwarders: [] })

    return store.dispatch(actions.fetchForwarders())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
  });

  it('should create FETCH_FORWARDERS_FAILURE when request fails', () => {
    nock('https://forwarder-service.octoblu.dev')
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

  // it('should create CREATE_FORWARDER_SUCCESS when request is 201', () => {
  //   nock('https://data-forwarder-mongodb.octoblu.dev')
  //     .post('/devices')
  //     .reply(201)
  //
  //   const expectedActions = [
  //     { type: types.CREATE_FORWARDER_REQUEST },
  //     { type: types.CREATE_FORWARDER_SUCCESS, body: { name: 'mango'}}
  //   ]
  //
  //   const store = mockStore({forwarders: []})
  //
  //   return store.dispatch(actions.createForwarder({name: 'mango'}))
  //     .then(() => {
  //       expect(store.getActions()).to.deep.equal(expectedActions)
  //     })
  // })
})
