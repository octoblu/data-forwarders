import chai, { expect } from 'chai';
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../../constants/action-types'
import * as actions from './forwarders-actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Action: Forwarders', () => {
})
