import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';
import Form from 'plexus-form';
import validate from 'plexus-validate';

import * as ForwarderActions from '../actions/forwarders-actions';

import DataStoreList from '../components/data-stores/data-store-list';

var ForwarderNew = React.createClass({
  render: function() {
    const { dataStores, dispatch, forwarder } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <h2>Data Stores</h2>
        { dataStores.length > 0 &&
          <DataStoreList
            stores={dataStores}
            onSelection={forwarderActions.addDataStore} />
        }

        {
          forwarder.optionsSchema &&
          <Form schema={forwarder.optionsSchema} validate={validate} onSubmit={forwarderActions.setOptions} />
        }
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
