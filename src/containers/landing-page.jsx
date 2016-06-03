import React from 'react';
import { AppBar, AppBarPrimary, AppBarSecondary, Button, DeviceIcon, Page } from 'zooid-ui'
import LandingPageContent from '../components/LandingPageContent'

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
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
            <a href="https://meshblu-forwarders.readme.io" className="OctobluAppBar-link">Docs</a>
            <a href="#" className="OctobluAppBar-link">Need Help?</a>
          </AppBarSecondary>
        </AppBar>

        <LandingPageContent />
      </div>
    )
  }
}
