import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TypesActions from '../../actions/types/types-actions'
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
    const { types, dispatch } = this.props;
    const typesActions = bindActionCreators(TypesActions, dispatch);

    return (
      <div>
        <h1>Data Store</h1>
        <p>Select the data store to forward messages to:</p>

        { types.length > 0 &&
          <DataStoreList
            stores={types}
            onSelection={forwarderActions.addDataStore} />
        }
      </div>

    );
  }
}

function mapStateToProps({ dispatch, types }) {
  return {
    types: types
  };
};

export default connect(mapStateToProps)(ForwardersNew);
