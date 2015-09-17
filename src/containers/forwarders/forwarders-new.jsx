import _ from "lodash";
import React from "react";
import { Link, Navigation, RouteHandler } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from 'plexus-form';
import validate from 'plexus-validate';

import * as ForwarderActions from '../../actions/forwarders-actions';

import DataStoreList from '../../components/data-stores/data-store-list';

var ForwarderNew = React.createClass({
  mixins: [Navigation],

  componentWillReceiveProps: function(nextProps) {
    const { forwarder } = nextProps;
    if (forwarder.dataStore) {
      this.transitionTo('forwarders.new.options');
    }
    if (forwarder.options) {
      console.log('Boom!');
    }
  },

  render: function() {
    const { dataStores, dispatch, forwarder } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <h1>Create Meshblu Forwarder</h1>

        <ul className="crumbs">
          { forwarder.dataStore && <li>1.</li> }
          { forwarder.options && <li>2.</li> }
          { forwarder.gateblu && <li>3.</li> }
          { forwarder.subscriptions && <li>4.</li> }
        </ul>

        <RouteHandler />
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
