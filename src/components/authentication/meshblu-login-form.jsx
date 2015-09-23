import _ from "lodash"
import React, { PropTypes } from "react"
import { Navigation } from "react-router"
import FormField from "../snap/form-field"
import Button from "../snap/button"

const initialState = {
  uuid: '',
  token: ''
};

var MeshbluLoginForm = React.createClass({
  mixins: [Navigation],

  propTypes: {
    onLogin: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    isConnecting: PropTypes.bool
  },

  getInitialState: function() {
    return initialState;
  },

  handleSubmit: function(event){
    event.preventDefault();

    const { uuid, token } = this.state;
    const device = { uuid, token };
    const { onLogin } = this.props;

    onLogin(device);
    this.setState(initialState);
  },

  handleChange: function(event) {
    const form = {}
    form[event.target.name] = event.target.value;
    this.setState(form);
  },

  render: function() {
    const { uuid, token } = this.state;
    const { errorMessage, isConnecting } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Forwarder Login</legend>
          {errorMessage &&
            <div className='message message-error'>
              <p>{errorMessage}</p>
            </div>
          }
          <FormField label="UUID">
            <input
              className="form-input"
              value={uuid}
              onChange={this.handleChange}
              name="uuid"
              placeholder="Meshblu UUID"
              type="text"/>
          </FormField>

          <FormField label="Token">
            <input
              className="form-input"
              value={token}
              onChange={this.handleChange}
              name="token"
              placeholder="Meshblu Token"
              type="password"/>
          </FormField>

          <button
            className="button button-approve"
            onClick={this.handleSubmit}
            disabled={isConnecting || !uuid || !token}
            kind="primary"
            block={true}>
            Login
          </button>
        </fieldset>
      </form>
    )
  }
});

module.exports = MeshbluLoginForm;
