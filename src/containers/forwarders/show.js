import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import {Tab ,Tabs ,TabList ,TabPanel} from 'react-tabs';

import { fetchForwarderByUuid } from '../../actions/forwarders/forwarders-actions'
import { fetchMyDevices } from '../../actions/device/device-actions'

import MyDevices from '../../components/MyDevices'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  forwarder: PropTypes.object,
}

class ForwardersShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch, routeParams} = this.props
    const {forwarderUuid} = routeParams

    dispatch(fetchForwarderByUuid(forwarderUuid))
    dispatch(fetchMyDevices());
  }

  render() {
    const { forwarders, myDevices, routeParams } = this.props
    const { forwarderUuid} = routeParams


    if (forwarders.fetching) return <div>Loading...</div>
    if (forwarders.error) return <div>Error: {error.message}</div>

    const {name, type} = forwarders.selected
    return (
      <div>
        <div>
          <h1>Forwarder: {name}</h1>
          <h2>Type: {type}</h2>
        </div>

        <Tabs>
          <TabList>
            <Tab>Configurations</Tab>
            <Tab>Subscriptions</Tab>
          </TabList>

          <TabPanel>
            <h2>Configurations</h2>
          </TabPanel>

          <TabPanel>
            <MyDevices devices={myDevices.items} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}


ForwardersShow.propTypes = propTypes

function mapStateToProps({ forwarders, myDevices }) {
  return {
    forwarders,
    myDevices,
  }
}

export default connect(mapStateToProps)(ForwardersShow)
