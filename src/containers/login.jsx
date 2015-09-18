import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Child components
import MeshbluLoginForm from '../components/authentication/meshblu-login-form';

// Actions
import * as MeshbluActions from '../actions/meshblu-actions';

var Login = React.createClass({
  render: function() {
    const {meshblu, dispatch} = this.props;
    const meshbluActions = bindActionCreators(MeshbluActions, dispatch);

    return (
      <div className='grid-flex-cell grid-flex-cell-1of3'>
        <MeshbluLoginForm
          onLogin={meshbluActions.createConnection}
          isConnecting={meshblu.isConnecting}
          errorMessage={meshblu.error.message}/>
      </div>
    );
  }
});


function mapStateToProps(state) {
  return {
    meshblu: state.meshblu
  };
}

export default connect(mapStateToProps)(Login);
