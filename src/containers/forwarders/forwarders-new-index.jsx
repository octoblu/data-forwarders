import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';

import * as ForwarderActions from '../../actions/forwarders-actions';
import * as DeviceActions from '../../actions/devices-actions';
import DeviceTable from '../../components/devices/device-table';

import FormField from '../../components/snap/form-field';

var ForwarderNewIndex = React.createClass({
  componentDidMount: function() {
    const { dispatch, meshblu } = this.props;
    const deviceActions = bindActionCreators(DeviceActions, dispatch);

    deviceActions.fetchDevices(meshblu);
  },

  getInitialState: function() {
    return {
      name: ''
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    const ownerUUID = localStorage.getItem('meshblu-uuid');
    this.props.dispatch(ForwarderActions.setOwner(ownerUUID));
    this.props.dispatch(ForwarderActions.setName(this.state.name));
  },

  handleChange: function(e) {
    let { value} = e.target;
    this.setState({ name: value });
  },

  render: function() {
    const { devices, dispatch, forwarder } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <h2>Name Your Forwarder</h2>

        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <FormField label="Forwarder Name">
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </FormField>
          <button type="submit" className="button button-primary">Select Datastore</button>
        </form>


      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    meshblu: state.meshblu,
    devices: state.devices,
    forwarder: state.forwarder
  };
};

export default connect(mapStateToProps)(ForwarderNewIndex);
