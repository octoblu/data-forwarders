import _ from 'lodash'
import React, { PropTypes } from 'react';

const propTypes = {
  device: PropTypes.object.isRequired,
};

const MyDeviceItem = ({ device }) => {
  if (_.isEmpty(device)) return null;

  const { name, type } = device;
  
  return (
    <tr>
      <td>{name}</td>
      <td>{type}</td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
    </tr>
  )
}

MyDeviceItem.propTypes = propTypes;

export default MyDeviceItem;
