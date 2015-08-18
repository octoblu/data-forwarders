import React from "react";
import {Navigation} from "react-router"
import meshblu from "meshblu";
import MeshbluAuthForm from "../components/authentication/meshblu-auth-form"

var Session = React.createClass({
  mixins: [Navigation],

  componentDidMount: function() {
    var session = this;
    var query = this.props.query;

    if (!query || !query.uuid || !query.token) {
      this.transitionTo('login');
      return;
    };

    console.log('attempting login with ', query);
    var meshbluConnection = meshblu.createConnection({
      uuid: query.uuid,
      token: query.token
    }).on('ready', function(connection){
      console.log('Ready', window.meshbluConnection);
      session.transitionTo('forwarders');
    });
  },

  render: function() {
    return (
      <div>
        <p>UUID:</p>
        <p>Token:</p>
      </div>
    );
  }
});

module.exports = Session;
