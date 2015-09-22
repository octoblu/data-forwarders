import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';

import * as DeviceActions from '../actions/devices-actions';
import * as ForwarderActions from '../actions/forwarders-actions';
import FormField from "../components/snap/form-field";

var ForwarderDetail = React.createClass({
  componentWillMount: function() {
    const { dispatch, router } = this.props;
    // dispatch(DeviceActions.fetchDevice(router.params.forwarderUUID));
  },

  render: function() {
    const { devices, router } = this.props;
    let forwarder = _.findWhere(devices.forwarders, {uuid : router.params.forwarderUUID })
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Forwarder Detail</legend>
            <FormField label="Name">
              <input
                className="form-input"
                value={forwarder.uuid}
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

          <button
            className="button button-approve"
            kind="primary"
            block={true}>
            Delete
          </button>
        </fieldset>
      </form>
      // <div className="Page">
      //   <div>
      //     <img src={forwarder.logoUrl} className="" alt="Forwarder Logo"/>
      //     <form>
      //       <fieldset></fieldset>
      //     </form>
      //     <div>{forwarder.name}</div>
      //     <div>{forwarder.uuid}</div>
      //     <div>{forwarder.gateblu}</div>
      //   </div>
      //
      //   <button className="button Button-jumbo">Delete</button>
      // </div>
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
