import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';

import * as ForwarderActions from '../../actions/forwarders-actions';

import DataStoreList from '../../components/data-stores/data-store-list';

var ForwarderNewDataStore = React.createClass({
  render: function() {
    const { dataStores, dispatch } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <h2>Data Stores</h2>
        { dataStores.length > 0 &&
          <DataStoreList
            stores={dataStores}
            onSelection={forwarderActions.addDataStore} />
        }
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    dataStores: state.dataStores
  };
};

export default connect(mapStateToProps)(ForwarderNewDataStore);
