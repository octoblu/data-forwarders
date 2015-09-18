import _ from "lodash";
import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as ForwarderActions from '../../actions/forwarders-actions';

import DataStoreList from '../../components/data-stores/data-store-list';

var ForwarderNew = React.createClass({

  render: function() {
    const { dataStores, dispatch, forwarder } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <h3>Create Meshblu Forwarder</h3>
        <Link to="/forwarders/new">New Forwarder</Link>

        <ul className="crumbs">
          { forwarder.dataStore && <li>1.</li> }
          { forwarder.options && <li>2.</li> }
          { forwarder.gateblu && <li>3.</li> }
          { !!forwarder.subscriptions.length && <li>4.</li> }
        </ul>

        { this.props.children }
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    dataStores: state.dataStores,
    forwarder: state.forwarder,
    meshblu: state.meshblu
  };
};

export default connect(mapStateToProps)(ForwarderNew);
