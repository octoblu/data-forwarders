import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { AppBar, AppBarPrimary } from 'zooid-ui'
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
      </AppBar>
      {/*<div class="AppBar-section AppBar-section--primary"><nav class="OctobluAppBar-nav OctobluAppBar-nav--primary" role="navigation"><a class="OctobluAppBar-link" href="https://app.octoblu.com/things">Things</a><a class="OctobluAppBar-link OctobluAppBar-link--is-selected" href="https://app.octoblu.com/design">Design</a><a class="OctobluAppBar-link" href="https://app.octoblu.com/bluprints">Bluprints</a></nav></div>*/}

      {children}

      <Toast message={toast} />
    </Authenticated>
  );
}

function mapStateToProps({ toast }) {
  return { toast }
}

export default connect(mapStateToProps)(AppLayout)
