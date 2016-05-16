import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Tab ,Tabs ,TabList ,TabPanel } from 'react-tabs';
import { SchemaContainer } from 'zooid-meshblu-device-editor';

import MyDevices from '../../components/MyDevices';

import {
  fetchMyDevices,
  createSubscription,
  deleteSubscription
} from '../../actions/device/device-actions';

import {
  deleteForwarderByUuid,
  fetchForwarderByUuid
} from '../../actions/forwarders/forwarders-actions';


const propTypes = {
  dispatch: PropTypes.func.isRequired,
  forwarder: PropTypes.object,
}

class ForwardersShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    const {dispatch, routeParams} = this.props
    const {forwarderUuid} = routeParams
    console.log('calling fetchForwarderByUuid')
    dispatch(fetchForwarderByUuid(forwarderUuid))
    dispatch(fetchMyDevices());
  }

  handleDelete()  {
    const {dispatch, routeParams} = this.props
    const {forwarderUuid} = routeParams

    dispatch(deleteForwarderByUuid(forwarderUuid))
  }

  toggleSubscription = ({device, subscriptionType}) => {
    const {dispatch, forwarder} = this.props
    const subscription = { emitterUuid: device.uuid, subscriberUuid: forwarder.device.uuid, type: subscriptionType }

    if( _.some(forwarder.subscriptions, {emitterUuid: device.uuid, type: subscriptionType}) ) {
      return dispatch(deleteSubscription(subscription));
    }
    return dispatch(createSubscription(subscription));
  }

  render() {
    const {
      forwarder,
      fetching,
      error,
      myDevices,
      routeParams,
      activeForwarderType,
    } = this.props

    if (fetching) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (_.isEmpty(forwarder)) return null

    const {device, subscriptions} = forwarder
    const { name, type, uuid } = device

    return (
      <div>
        <div>
          <h1>Forwarder: {name}</h1>
          <h2>Type: {type}</h2>
          <h2>UUID: {uuid}</h2>
          <button onClick={this.handleDelete}>Delete</button>
        </div>

        <Tabs>
          <TabList>
            <Tab>Configurations</Tab>
            <Tab>Subscriptions</Tab>
          </TabList>

          <TabPanel>
            <h2>Configure</h2>
          </TabPanel>

          <TabPanel>
            <MyDevices onToggleSubscription={this.toggleSubscription} devices={myDevices.items} subscriptions={subscriptions} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}


ForwardersShow.propTypes = propTypes

function mapStateToProps({ forwarders, myDevices, activeForwarderType }) {

  return {
    forwarder: forwarders.selected,
    fetching: forwarders.fetching,
    error: forwarders.error,
    myDevices,
    activeForwarderType
  }
}

export default connect(mapStateToProps)(ForwardersShow)
