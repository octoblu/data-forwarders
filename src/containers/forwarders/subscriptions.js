import _ from 'lodash'
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { SchemaContainer } from 'zooid-meshblu-device-editor';

import SubscriptionEditor from '../../components/SubscriptionEditor'
import { toggleSubscription } from '../../actions/forwarders/forwarders-actions';
import { fetchMyDevices } from '../../actions/device/device-actions';
import { setToast } from '../../actions'
import { getMeshbluConfig } from '../../services/auth-service'
import { searchActions } from 'redux-meshblu'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
}

class Subscriptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleSubscription = this.handleToggleSubscription.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchMyDevices());
  }

  handleToggleSubscription({ device, subscriptionType }) {
    this.props.dispatch(toggleSubscription({ device, subscriptionType }))
  }

  componentWillReceiveProps({ error }) {
    if (error) {
      this.props.dispatch(setToast(error))
    }
  }

  render() {
    const { fetching, subscriptions, myDevices, error } = this.props

    if (this.props.fetchingForwarders) return null

    if (fetching) return null;
    if (_.isEmpty(subscriptions)) return null;

    return (
      <SubscriptionEditor
        devices={myDevices}
        subscriptions={subscriptions}
        onToggleSubscription={ this.handleToggleSubscription }
      />
    )
  }
}

function mapStateToProps({ forwarders, myDevices }) {
  const { error, subscriptions }   = forwarders.selected
  const { fetching, items } = myDevices

  return { subscriptions, myDevices: items, fetching: fetching, fetchingForwarders: forwarders.fetching, error }
}

export default connect(mapStateToProps)(Subscriptions)
