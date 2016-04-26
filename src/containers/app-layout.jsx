import React from 'react'
import { Link } from 'react-router'
import { AppBar, AppBarPrimary, AppBarSecondary } from 'zooid-ui'

import Authenticated from './authenticated'

import 'zooid-ui/dist/style.css'

const AppLayout = ({children}) => {
  return (
    <Authenticated>
      <AppBar>
        <AppBarPrimary>
          Octoblu Forwarders
        </AppBarPrimary>

        <AppBarSecondary>
          <Link to="/logout" className="AppBar-Link">Logout</Link>
        </AppBarSecondary>
      </AppBar>

      {children}
    </Authenticated>
  );
}


export default AppLayout
