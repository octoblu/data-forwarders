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
          <img className="Logo" src="//d2zw6j512x6z0x.cloudfront.net/master/fabb7e2ca58bc41ac9dfed72af272ce559894545/assets/images/octoblu-color.png"/>
          <ul className='list-unstyled list-inline cf'>
            <li><Link to="/">Forwarders</Link></li>
            <li><Link to="/forwarders/new">Create Forwarder</Link></li>
            <li><Link to="/logout">Logout</Link></li>
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
