import _ from 'lodash'
import React, { PropTypes } from 'react'

import MyDeviceItem from './MyDeviceItem'

const propTypes = {
  devices: PropTypes.array.isRequired,
}

const MyDevices = ({ devices }) => {
  if (_.isEmpty(devices)) return null;

  const deviceRows = _.map(devices, (device, index) => {
    return <MyDeviceItem device={device} key={index} />;
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
      <tbody>
      {deviceRows}
      </tbody>
    </table>
  )
}

MyDevices.propTypes = propTypes

export default MyDevices
