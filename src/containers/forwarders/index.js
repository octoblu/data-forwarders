import _ from 'lodash'
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ForwarderList from '../../components/ForwarderList';

import { fetchForwarders } from '../../actions/forwarders-actions'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
}

export class ForwardersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchForwarders());
  }

  render() {
    const { items, error, fetching } = this.props;

    if (this.props.fetching) return <div>Loading...</div>
    if (error) return <div>{`Error: ${error.message}`}</div>
    if (_.isEmpty(items)) return <div>Empty State</div>

    return <ForwarderList forwarders={items} />
  }
}

ForwardersIndex.propTypes = propTypes

function mapStateToProps({ dispatch, forwarders }) {
  const { error, fetching, items } = forwarders;
  
  return { error, dispatch, fetching, items };
}

export default connect(mapStateToProps)(ForwardersIndex)
