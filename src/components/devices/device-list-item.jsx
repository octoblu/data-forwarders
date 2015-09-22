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

    return (
      <div className="Card">
        <button className="Card-thumbnail" onClick={this.handleClick}>
          <img src="https://s3-us-west-2.amazonaws.com/octoblu-icons/device/gateblu.svg" alt={device.name}/>
        </button>

        <p className="Card-label">{device.name}</p>
      </div>
    );
  }
});

module.exports = DeviceListItem;
