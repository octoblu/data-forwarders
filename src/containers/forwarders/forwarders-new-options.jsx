import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';
import SchemaForm from '../../components/snap/schema-form';

import * as ForwarderActions from '../../actions/forwarders-actions';

var ForwarderNewOptions = React.createClass({
  render: function() {
    const { dataStores, dispatch, forwarder } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <h3>Set Options</h3>
        <p>This data store requires you to configure the following options.</p>

        {
          forwarder.optionsSchema &&
          <SchemaForm schema={forwarder.optionsSchema} onSubmit={forwarderActions.setOptions} />
        }
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    forwarder: state.forwarder,
  };
};

export default connect(mapStateToProps)(ForwarderNewOptions);
