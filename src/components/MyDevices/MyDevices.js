import _ from 'lodash'
import React, { PropTypes } from 'react'

import MyDeviceItem from './MyDeviceItem'

const propTypes = {
  devices: PropTypes.array.isRequired,
  subscriptions: PropTypes.array.isRequired,
  onToggleSubscription: PropTypes.func.isRequired
}

const MyDevices = ({ devices, subscriptions, onToggleSubscription }) => {
  if (_.isEmpty(devices)) return null;

  const deviceRows = _.map(devices, (device, index) => {
    const deviceSubscriptions = _.filter (subscriptions, {emitterUuid: device.uuid})
    return <MyDeviceItem device={device} subscriptions={deviceSubscriptions} onToggleSubscription={onToggleSubscription} key={index} />;
   })

  return (
    <table>
      <thead>
        <tr>
          <th>Device Name</th>
          <th>Device Type</th>
          <th>broadcast.sent</th>
          <th>broadcast.received</th>
          <th>message.sent</th>
          <th>message.received</th>
        </tr>
      </thead>
      <tbody>
      {deviceRows}
      </tbody>
    </table>
  )
}

MyDevices.propTypes = propTypes

export default MyDevices
