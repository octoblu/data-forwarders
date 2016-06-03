import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import AppLayout from './containers/app-layout'
import LandingPage from './containers/landing-page'
import ForwardersIndex from './containers/forwarders/index'
import ForwardersShow from './containers/forwarders/show'
import ForwardersShowConfigure from './containers/forwarders/configure'
import ForwardersShowSubscriptions from './containers/forwarders/subscriptions'
import ForwarderTypes from './containers/forwarder-types/'
import ForwarderTypesConfigure from './containers/forwarder-types/configure'
import ForwarderTypesShow from './containers/forwarder-types/show'

import Login from './containers/login'
import Logout from './containers/logout'
import NotFound from './containers/not-found'

import { storeAuthentication } from './services/auth-service'

const AppRoutes = ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={ForwardersIndex} />

        <Route path="new" component={ForwarderTypes}>
          <IndexRoute component={ForwarderTypesShow}/>
          <Route path=":forwarderDeviceType" component={ForwarderTypesConfigure}/>
        </Route>

        <Route path="forwarders" component={ForwardersIndex} />

        <Route path="forwarders/:forwarderUuid" component={ForwardersShow}>
          <IndexRoute component={ForwardersShowConfigure} />
          <Route path="subscriptions" component={ForwardersShowSubscriptions} />
        </Route>
      </Route>

      <Route path="home" component={LandingPage} />
      <Route path="authenticated" onEnter={storeAuthentication}/>
      <Route path="login" component={Login}/>
      <Route path="logout" component={Logout}/>

      <Route path="*" component={NotFound}/>
    </Router>
  )
}

export default AppRoutes
