import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchTypes } from '../../actions/types/types-actions'
import ForwarderTypeList from '../../components/ForwarderTypeList'

const propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
}

class ForwarderTypes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchTypes());
  }

  render() {
    const { children, error, fetching, items } = this.props;

    if (fetching) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return <div>{children}</div>
  }
}

function mapStateToProps({types}) {
  const { error, fetching, items } = types
  return { error, fetching, items };
};


ForwarderTypes.propTypes = propTypes;

export default connect(mapStateToProps)(ForwarderTypes);
