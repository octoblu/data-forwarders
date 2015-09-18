import _ from 'lodash';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const DeviceListItem = React.createClass({
  propTypes: {
    device: PropTypes.object.isRequired,
    onSelection : PropTypes.func
  },

  handleClick: function() {
    const { device, onSelection } = this.props;
    onSelection(device);
  },

  render: function() {
    const { device, onSelection } = this.props;
    let item = <span>{device.name}</span>;

    if (onSelection) {
      item = <button onClick={this.handleClick}>{device.name}</button>
    }

    return <li>{item}</li>;
  }
});

module.exports = DeviceListItem;
