import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ForwarderActions from '../../actions/forwarders-actions';

var ForwarderNewGateblu = React.createClass({
  render: function() {
    const { dispatch } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <h2>Add To Gateblu</h2>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    meshblu: state.meshblu
  };
};

export default connect(mapStateToProps)(ForwarderNewGateblu);
