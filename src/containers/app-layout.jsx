import React from 'react'
import { Link } from 'react-router'
import { AppBar, AppBarPrimary, AppBarSecondary, TopBarTitle, Nav, Page } from 'zooid-ui'

import Authenticated from './authenticated'
import 'zooid-ui/dist/style.css'

var AppLayout = React.createClass({
  render: function() {
    return <Authenticated>
      <AppBar>
        <AppBarPrimary>
          Octoblu Forwarders
        </AppBarPrimary>

        <AppBarSecondary>
          <Link to="/logout" className="AppBar-Link">Logout</Link>
        </AppBarSecondary>
      </AppBar>

      {this.props.children}
    </Authenticated>
  }
})

export default (AppLayout)
