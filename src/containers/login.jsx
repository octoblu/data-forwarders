import React from 'react';
import { Navigation } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Child components
import MeshbluLoginForm from '../components/authentication/meshblu-login-form';

// Actions
import * as MeshbluActions from '../actions/meshblu-actions';

var Login = React.createClass({
  mixins: [Navigation],

  componentDidMount: function() {
    console.log(this.props);
  },

  onSuccess: function() {
    console.log(Success);
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.meshblu.connection) {
      console.log('Success!');
      this.transitionTo('forwarders.index');
    }
  },

  render: function() {
    const {meshblu, dispatch} = this.props;

    let meshbluActions = bindActionCreators(MeshbluActions, dispatch);

    return (
      <main>
        <MeshbluLoginForm
          onLogin={meshbluActions.createConnection}
          onSuccess={this.onSuccess}
          isConnecting={meshblu.isConnecting}
          errorMessage={meshblu.error.message}/>
      </main>
    );
  }
});


function mapStateToProps(state) {
  return {
    meshblu: state.meshblu
  };
}

export default connect(mapStateToProps)(Login);
