import _ from 'lodash'
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { SchemaContainer } from 'zooid-meshblu-device-editor';

import MyDevices from '../../components/MyDevices'


const propTypes = {
  dispatch: PropTypes.func.isRequired,
}

class Subscriptions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { subscriptions, myDevices } = this.props
    console.log('myDevices', myDevices);
    console.log('subscriptions', subscriptions);

    if (_.isEmpty(subscriptions)) return null;

    return (
      <div>
        Subscriptions

        <MyDevices devices={myDevices} subscriptions={subscriptions} onToggleSubscription={_.noop}/>
      </div>
    )
  }
}

function mapStateToProps({ forwarders, myDevices }) {
  const { subscriptions } = forwarders.selected

  return { subscriptions, myDevices: myDevices.items }
}

export default connect(mapStateToProps)(Subscriptions)
