import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { AppBar, AppBarPrimary, AppBarSecondary } from 'zooid-ui'
import Authenticated from './authenticated'
import Toast from 'zooid-ui-toast'

import { ENV } from 'config'

import 'zooid-ui/dist/style.css'
import '../schema-editor.css'

const AppLayout = ({ children, toast }) => {
  return (
    <Authenticated>
      <AppBar>
        <AppBarPrimary>
          <a className="OctobluAppBar-link OctobluAppBar-link--logo" href="https://app.octoblu.com">
            <img className="OctobluAppBar-logo" src="//d2zw6j512x6z0x.cloudfront.net/master/d48dc0bf063ecc1477d1163831ee8ff17efbbfae/assets/images/octoblu_logo.png"/>
          </a>

          <nav className="OctobluAppBar-nav OctobluAppBar-nav--primary" role="navigation">
            <a className="OctobluAppBar-link" href="/">Data Forwarders</a>
          </nav>

        </AppBarPrimary>
        
        <AppBarSecondary>
          <Link to="/logout" className="OctobluAppBar-link">Sign out</Link>
        </AppBarSecondary>
      </AppBar>

      {children}

      <Toast message={toast} />
    </Authenticated>
  );
}

function mapStateToProps({ toast }) {
  return { toast }
}

export default connect(mapStateToProps)(AppLayout)
