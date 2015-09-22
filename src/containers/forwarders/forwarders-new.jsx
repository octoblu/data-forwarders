import _ from "lodash";
import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

import * as ForwarderActions from '../../actions/forwarders-actions';
import * as MeshbluActions from '../../actions/meshblu-actions';

import DataStoreList from '../../components/data-stores/data-store-list';

var ForwarderNew = React.createClass({
  registerForwarder: function()   {
    const { dispatch, forwarder, meshblu } = this.props;
    dispatch(MeshbluActions.registerDevice(forwarder, meshblu.connection));
  },

  updateDevice: function()   {
    const { dispatch, devices, meshblu } = this.props;
    let device = devices.subDevices[0]
    device.armed = true;

    dispatch(MeshbluActions.updateDevice(device, meshblu.connection));
  },

  render: function() {
    const { dataStores, dispatch, forwarder, router } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    console.log(router.location.pathname);

    return (
      <div>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <ul className='list-unstyled list-inline cf'>
            <li><Link to="/">Forwarders</Link></li>
            <li><Link to="/forwarders/new">Create Forwarder</Link></li>
          </ul>
        </nav>

        <div className="Page">
          <nav role='navigation'>
            <ul className='list-unstyled list-inline breadcrumbs'>
              <li><Link to="/forwarders/new" className='current-item'>Name Forwarder</Link>›</li>
              <li><Link to="/forwarders/new/store" className='unavailable-item'>Pick Data Store</Link>›</li>
              <li><Link to="/forwarders/new/options" className='unavailable-item'>Set Options</Link>›</li>
              <li><Link to="/forwarders/new/gateblu" className='unavailable-item'>Select Gateblu</Link>›</li>
              <li><Link to="/forwarders/new/subscriptions" className='unavailable-item'>Subscibe Devices</Link>›</li>
              <li><Link to="/forwarders/new/register" className='unavailable-item'>Done!</Link></li>
            </ul>
          </nav>

          { this.props.children }
        </div>
      </div>

    );
  }
});

function mapStateToProps(state) {
  return {
    dataStores: state.dataStores,
    devices: state.devices,
    forwarder: state.forwarder,
    meshblu: state.meshblu,
    router: state.router
  };
};

export default connect(mapStateToProps)(ForwarderNew);
