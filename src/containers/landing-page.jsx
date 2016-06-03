import React from 'react';
import { AppBar, AppBarPrimary, AppBarSecondary, Button, DeviceIcon, Page } from 'zooid-ui'
import { Card, CardHeader, CardBody, CardFooter, CardGrid } from '../components/Card/'

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
          </AppBarSecondary>
        </AppBar>

        <Page width="small" className="LandingPage">

          <h1 className="LandingPage-header">Octoblu Data Forwarders</h1>

          <p>
            Forward data from your IoT devices.
          </p>

          <section>
            <header>Supported Forwarders</header>

            <CardGrid>
              <Card>
                <CardBody>
                  <DeviceIcon type="forwarder:msazure" className="Card-image"/>
                </CardBody>
                <CardFooter text="Microsoft Azure Service Bus" />
              </Card>

              <Card>
                <CardBody>
                  <DeviceIcon type="forwarder:elasticsearch" className="Card-image"/>
                </CardBody>
                <CardFooter text="Elastic Search" />
              </Card>

              <Card>
                <CardBody>
                  <DeviceIcon type="forwarder:splunk" className="Card-image"/>
                </CardBody>
                <CardFooter text="Splunk" />
              </Card>

              <Card>
                <CardBody>
                  <DeviceIcon type="forwarder:mongodb" className="Card-image"/>
                </CardBody>
                <CardFooter text="MongoDB" />
              </Card>
            </CardGrid>
          </section>

          <Button to="/login" kind="primary" size="large" block>Get Started</Button>
        </Page>
      </div>
    )
  }
}
