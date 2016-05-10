import React, { PropTypes } from 'react';
import { fetchMyDevices } from '../../actions/device/device-actions'
import { connect } from 'react-redux';

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

    const deviceRows = _.map(devices, (device, index) => {
      return (
        <tr key={index}>
          <td>{device.name}</td>
          <td>{device.type}</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
      )
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Device Name</th>
            <th>Device Type</th>
            <th>broadcast.sent</th>
            <th>broadcast.received</th>
            <th>message.received</th>
            <th>message.sent</th>
          </tr>
        </thead>
        <tbody>{deviceRows}</tbody>
      </table>
    )
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
