import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';

import * as DeviceActions from '../actions/devices-actions';
import * as ForwarderActions from '../actions/forwarders-actions';
import DeviceList from '../components/devices/device-list';

var Forwarders = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(DeviceActions.fetchDevices(this.props.meshblu));
  },

  render: function() {
    const { devices } = this.props;

    let forwarders = _.map(devices.forwarders, function(forwarder){
      return (
        <div className="Card" key={forwarder.uuid}>
          <Link to={`/forwarder/${forwarder.uuid}`} className="Card-thumbnail">
            <img src={forwarder.logoUrl} alt={forwarder.name}/>
          </Link>

          <p className="Card-label">{forwarder.name}</p>
        </div>
      );
    });

    return (
      <div>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <ul className='list-unstyled list-inline cf'>
            <li><Link to="/">Forwarders</Link></li>
            <li><Link to="/forwarders/new">Create Forwarder</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>

        <div className="Page">

          <div className="grid-flex-container">
            {forwarders}
          </div>

          <Link to="/forwarders/new" className="Card">
            + Create Forwarder
          </Link>
          {this.props.children}
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
