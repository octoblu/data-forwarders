import React, { Component } from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import AppLayout from '../containers/app-layout'

import ForwardersEdit from '../containers/forwarders/edit'
import ForwardersIndex from '../containers/forwarders/index'
import ForwardersShow from '../containers/forwarders/show'

import ForwarderTypes from '../containers/forwarder-types/'
import ConfigureForwarderTypes from '../containers/forwarder-types/configure'
import ShowForwarderTypes from '../containers/forwarder-types/show'

import Login from '../containers/login'
import Logout from '../containers/logout'
import NotFound from '../containers/not-found'


import { fetchOctobluUser, storeAuthentication } from '../services/auth-service'


const AppRoutes = ({ history }) => {
  return (
  <Router history={history}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={ForwardersIndex}/>

      <Route path="new" component={ForwarderTypes}>
        <IndexRoute component={ShowForwarderTypes}/>
        <Route path=":forwarderTypeId" component={ConfigureForwarderTypes}/>
      </Route>


      {/*<Route path=":forwarderUuid" component={ForwardersShow}/>
      <Route path=":forwarderUuid/edit" component={ForwardersEdit}/>*/}
    </Route>

    <Route path="authenticated" onEnter={storeAuthentication}/>
    <Route path="login" component={Login}/>
    <Route path="logout" component={Logout}/>

    <Route path="*" component={NotFound}/>
  </Router>
)}

export default AppRoutes
