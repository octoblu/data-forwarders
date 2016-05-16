import _ from 'lodash'
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ForwarderList from '../../components/ForwarderList';
import { fetchForwarders } from '../../actions/forwarders/forwarders-actions'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  forwarders: PropTypes.array,
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.object,
}

class ForwardersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchForwarders());
  }

  render() {
    const { error, fetching, forwarders } = this.props;

    if (fetching) return <div>Loading...</div>
    if (error) return <div>{`Error: ${error.message}`}</div>

    return <ForwarderList forwarders={forwarders} />
  }
}

ForwardersIndex.propTypes = propTypes

function mapStateToProps({ forwarders }) {
  const { error, fetching, items } = forwarders;

  return {
    error,
    fetching,
    forwarders: items
  };
}

export default connect(mapStateToProps)(ForwardersIndex)
