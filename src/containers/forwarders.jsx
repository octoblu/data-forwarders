import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';

import * as DeviceActions from '../actions/devices-actions';

import DeviceList from '../components/devices/device-list';

var Forwarders = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(DeviceActions.fetchDevices(this.props.meshblu));
  },

  render: function() {
    const { devices } = this.props;

    return (
      <div>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <ul className='list-unstyled list-inline cf'>
            <li><Link to="/">Forwarders</Link></li>
            <li><Link to="/forwarders/new">Create Forwarder</Link></li>
          </ul>
        </nav>

        <div className="Page">
          <DeviceList devices={devices.forwarders} isFetching={devices.isFetching} />

          <Link to="/forwarders/new" className="Card">
            + Create Forwarder
          </Link>
        </div>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    devices: state.devices,
    meshblu: state.meshblu
  };
};

export default connect(mapStateToProps)(Forwarders);
