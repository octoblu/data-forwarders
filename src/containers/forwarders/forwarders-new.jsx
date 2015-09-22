import _ from "lodash";
import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, IsActive } from 'react-router';
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

  renderBreadcrumb: function(pathName, label) {
    const { history } = this.props;
    let isActive = history.isActive(pathName);
    let classes = classNames({'current-item': isActive})

    if (!this.redirectIfForwarderPropertyNotSet(pathName)) {
      return <span className="unavailable-item Breadcrumb-item">{label}</span>;
    }

    return <Link to={pathName} className={classes}>{label}</Link>;
  },

  redirectIfForwarderPropertyNotSet: function(pathName) {
    switch (pathName) {
      case '/forwarders/new/store':
        return this.validateProperty('name');
        break;
      case '/forwarders/new/options':
        return this.validateProperty('optionsSchema');
        break;
      case '/forwarders/new/gateblu':
        return this.validateProperty('options');
        break;
      case '/forwarders/new/subscriptions':
        return this.validateProperty('gateblu');
        break;
      case '/forwarders/new/register':
        return this.validateProperty('gateblu');
        break;
      default:
        return true;
    }
  },

  validateProperty: function(property) {
    const {forwarder} = this.props;

    if (!forwarder[property] || !forwarder[property].length) return false;

    return true;
  },


  render: function() {
    const { dataStores, dispatch, forwarder, router, history } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div className="Page">
        <nav role='navigation'>
          <ul className='list-unstyled list-inline breadcrumbs'>
            <li>{this.renderBreadcrumb("/forwarders/new/", "Name Forwarder")}›</li>
            <li>{this.renderBreadcrumb("/forwarders/new/store", "Pick Data Store")}›</li>
            <li>{this.renderBreadcrumb("/forwarders/new/options", "Set Options")}›</li>
            <li>{this.renderBreadcrumb("/forwarders/new/gateblu", "Select Gateblu")}›</li>
            <li>{this.renderBreadcrumb("/forwarders/new/subscriptions", "Subscibe Devices")}›</li>
            <li>{this.renderBreadcrumb("/forwarders/new/register", "Done!")}</li>
          </ul>
        </nav>

        { this.props.children }
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
