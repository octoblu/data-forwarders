import React, { Component } from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import AppLayout from '../containers/app-layout'

import ForwardersEdit from '../containers/forwarders/edit'
import ForwardersIndex from '../containers/forwarders/index'
import ForwardersNew from '../containers/forwarders/new'
import ForwardersShow from '../containers/forwarders/show'

import Login from '../containers/login'
import Logout from '../containers/logout'
import NotFound from '../containers/not-found'


import { fetchOctobluUser, storeAuthentication } from '../services/auth-service'


const AppRoutes = ({ history }) => {
  return <Router history={history}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={ForwardersIndex}/>

      <Route path="/forwarders">
        <IndexRoute component={ForwardersIndex}/>
        <Route path="new" component={ForwardersNew}/>
        <Route path=":forwarderUuid" component={ForwardersShow}/>
        <Route path=":forwarderUuid/edit" component={ForwardersEdit}/>
      </Route>

    </Route>

    <Route path="authenticated" onEnter={storeAuthentication}/>
    <Route path="login" component={Login}/>
    <Route path="logout" component={Logout}/>
    <Route path="*" component={NotFound}/>
  </Router>
}

export default AppRoutes
