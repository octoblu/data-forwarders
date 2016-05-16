import React, { PropTypes } from 'react';
import { fetchMyDevices } from '../../actions/device/device-actions'
import { connect } from 'react-redux';

import MyDevices from '../../components/MyDevices'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
}

class ForwardersEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchMyDevices());
  }

  render() {
    const { error, fetching, devices } = this.props;

    if (fetching) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return <MyDevices devices={devices} />
  }
}

function mapStateToProps({ myDevices }) {
  const { error, fetching, items } = myDevices

  return {
    error,
    fetching,
    devices: items
  }
}

export default connect(mapStateToProps)(ForwardersEdit)
