import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchTypes } from '../../actions/types/types-actions'
import ForwarderTypeList from '../../components/ForwarderTypeList'

export default class ForwardersNew extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchTypes());
  }

  render() {
    const { error, fetching, items } = this.props;

    if (fetching) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
      <div>
        <h1>Data Store</h1>
        <p>Select the data store to forward messages to:</p>

        { items.length > 0 &&
          <ForwarderTypeList forwarderTypes={items} />
        }
      </div>
    );
  }
}

function mapStateToProps({types}) {
  const { error, fetching, items } = types
  return { error, fetching, items };
};

export default connect(mapStateToProps)(ForwardersNew);
