import _ from "lodash"
import React from "react"
import {Navigation} from "react-router"
import FormField from "../snap/form-field"
import Button from "../snap/button"

var MeshbluAuthForm = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return {
      uuid: '',
      token: '',
      isFormDisabled: true
    }
  },

  handleSubmit: function(event){
    event.preventDefault();
    this.replaceWith('/session?uuid=' + this.state.uuid + '&token=' + this.state.token);
  },

  handleInputChange: function(event){
    var input = event.target;
    var state = {
      uuid: this.state.uuid,
      token: this.state.token,
    };

    state[input.name] = input.value;
    state.isFormDisabled = !(state.uuid.length && state.token.length);

    this.setState(state);
  },

  render: function() {
    return (
      <form>
        <FormField label="UUID">
          <input
            onChange={this.handleInputChange}
            value={this.state.uuid}
            name="uuid"
            placeholder="Meshblu UUID"
            type="text"/>
        </FormField>

        <FormField label="Token">
          <input
            onChange={this.handleInputChange}
            value={this.state.token}
            name="token"
            placeholder="Meshblu Token"
            type="password"/>
        </FormField>

        <Button
          onClick={this.handleSubmit}
          disabled={this.state.isFormDisabled}
          kind="primary"
          block={true}>
          Login
        </Button>
      </form>
    )
  }
});

module.exports = MeshbluAuthForm;
