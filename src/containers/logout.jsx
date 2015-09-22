import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as MeshbluActions from '../actions/meshblu-actions';

var Logout = React.createClass({
  componentWillMount: function() {
    const { dispatch, meshblu } = this.props;
    dispatch(MeshbluActions.closeConnection(meshblu.connection));
  },

  render: function(){
    return(<div></div>);
  }
});

function mapStateToProps(state) {
  return {
    meshblu: state.meshblu
  };
}

export default connect(mapStateToProps)(Logout);
