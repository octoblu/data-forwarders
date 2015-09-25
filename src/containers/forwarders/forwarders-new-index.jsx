import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';

import * as ForwarderActions from '../../actions/forwarders-actions';

var ForwarderNewIndex = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(ForwarderActions.initializeForwarder());
  },

  getInitialState: function() {
    return { name: '' };
  },

  handleSubmit: function(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    const ownerUUID = localStorage.getItem('meshblu-uuid');

    dispatch(ForwarderActions.setOwner(ownerUUID));
    dispatch(ForwarderActions.setName(this.state.name));
  },

  handleChange: function(e) {
    let { value } = e.target;
    this.setState({ name: value });
  },

  render: function() {
    const { dispatch, forwarder } = this.props;

    return (
      <div>
        <h4>Name Your Forwarder</h4>

        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div>
            <input
              name="name"
              value={this.state.name}
              placeholder="Forwarder Name"
              onChange={this.handleChange}
              type="text"
              className="form-input Input-jumbo"
              required/>
          </div>
          <button type="submit" className="button button-primary Button-jumbo">Select Datastore</button>
        </form>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    meshblu: state.meshblu,
    forwarder: state.forwarder
  };
};

export default connect(mapStateToProps)(ForwarderNewIndex);
