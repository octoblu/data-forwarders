import _ from 'lodash'
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { DeviceIcon, ListItem } from 'zooid-ui'

import './ForwarderListItem.css'

const propTypes = {
  forwarder: PropTypes.object.isRequired,
};

const ForwarderListItem = ({ forwarder }) => {
  if (_.isEmpty(forwarder)) return null;

  const { name, type, uuid } = forwarder;

  return (
    <div className="ForwarderListItem">
      <div className="ForwarderListItem-body">
        <DeviceIcon type={type} className="ForwarderListItem-image" />
      </div>
      
      <div className="ForwarderListItem-title">
        <Link
          to={`/forwarders/${uuid}/subscriptions`}
          className="ForwarderListItem-titleText"
        >
          {name}
        </Link>
      </div>
    </div>
  )
}

ForwarderListItem.propTypes = propTypes;

export default ForwarderListItem;
