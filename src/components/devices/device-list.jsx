import _ from 'lodash';
import React, { PropTypes } from 'react';

import DeviceListItem from './device-list-item';
import SnapEmptyState from '../../components/snap/empty-state';
import SnapLoading from '../../components/snap/loading';

const DeviceList = React.createClass({
  propTypes: {
    devices: PropTypes.array.isRequired,
    isFetching: PropTypes.bool,
    onSelection: PropTypes.func,
  },

  render: function() {
    const { devices, isFetching, onSelection } = this.props;

    if (isFetching) return <SnapLoading />;
    if (!devices.length && !isFetching) {
      return (
        <div className="EmptyState">
          <h3>You have no Forwarder Devices.</h3>
        </div>
      );
    }

    const listItems = _.map(devices, device => {
      return (<DeviceListItem device={device} onSelection={onSelection} key={device.uuid} />);
    });


    return (
      <div className="Cards">
        {listItems}
      </div>
    );
  }
});

module.exports = DeviceList;
