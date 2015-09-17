import _ from 'lodash';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const DeviceListItem = React.createClass({
  propTypes: {
    device: PropTypes.object.isRequired
  },

  render: function() {
    const { device } = this.props;

    return (
      <li>
        <Link to="devices" params={{uuid: device.uuid}}>{device.name}</Link>
      </li>
    );
  }
});

module.exports = DeviceListItem;
