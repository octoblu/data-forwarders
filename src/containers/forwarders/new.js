import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchTypes } from '../../actions/types/types-actions'
import DataStoreList from '../../components/DataStoreList/index'

export default class ForwardersNew extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchTypes());
  }

  render() {
    const { forwarderTypes } = this.props;
    return (
      <div>
        <h1>Data Store</h1>
        <p>Select the data store to forward messages to:</p>

        { forwarderTypes.length > 0 &&
          <DataStoreList forwarderTypes={forwarderTypes} />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("Forwarder", state)
  return {
    forwarderTypes: state.types.forwarderTypes
  };
};

export default connect(mapStateToProps)(ForwardersNew);
