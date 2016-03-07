import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';
import { push } from 'react-router-redux'

import * as MeshbluActions from '../actions/meshblu-actions';
import * as DeviceActions from '../actions/devices-actions';
import * as ForwarderActions from '../actions/forwarders-actions';
import FormField from "../components/snap/form-field";

var ForwarderDetail = React.createClass({
  componentWillMount: function() {
    const { dispatch, router } = this.props;
    // dispatch(DeviceActions.fetchDevice(router.params.forwarderUUID));
  },

  handleSubmit: function(e){
     const {forwarder, meshblu, dispatch} = this.props;
     e.preventDefault();
     let deleteDevice = window.confirm("Are you sure you want to delete this device?");
     if(deleteDevice){
       dispatch(MeshbluActions.deleteDevice(forwarder, meshblu.connection, () => {
          dispatch(push(null, '/forwarders'));
       }));
     }
  },

  render: function() {
    const { devices, router } = this.props;
    this.props.forwarder = _.findWhere(devices.forwarders, {uuid : router.params.forwarderUUID });
    const {forwarder} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <img src={forwarder.logoUrl} className="forwarder-detail thumbnail" alt="Forwarder Logo" />
        <fieldset>
          <legend>Forwarder Detail</legend>
            <FormField label="Name">
              <input
                className="form-input"
                value={forwarder.name}
                readOnly
                name="name"
                placeholder="Forwarder Name"
                type="text"/>
            </FormField>

          <FormField label="UUID">
            <input
              className="form-input"
              value={forwarder.uuid}
              readOnly
              name="uuid"
              placeholder="Forwarder UUID"
              type="text"/>
          </FormField>

          <FormField label="Gateblu UUID">
            <input
              className="form-input"
              value={forwarder.gateblu}
              readOnly
              name="token"
              placeholder="Gateblu UUID"
              type="text"/>
          </FormField>
          <FormField label="Data store">
            <input
              className="form-input"
              value={forwarder.dataStore}
              readOnly
              name="dataStore"
              placeholder="Forwarder Datastore"
              type="text"/>
          </FormField>

          <button
            className="button button-warn"
            kind="primary"
            onClick={this.handleSubmit}
            block={true}>
            Delete
          </button>
        </fieldset>
      </form>
    )
  }
});

function mapStateToProps(state) {
  return {
    meshblu: state.meshblu,
    devices: state.devices,
    router : state.router
  };
};

export default connect(mapStateToProps)(ForwarderDetail);
