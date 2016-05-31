import _ from 'lodash'
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, DeviceIcon } from 'zooid-ui';

import './ForwarderTypeListItem.css';

const propTypes = {
  forwarderType: PropTypes.object.isRequired,
}

const ForwarderTypeListItem = ({ forwarderType }) => {
  return (
    <Link to={`/new/${forwarderType.deviceType}`} className="ForwarderTypeListItem">
      <div className="ForwarderTypeListItem-body">
        <DeviceIcon type={forwarderType.deviceType} className="ForwarderTypeListItem-bodyImage" />
      </div>
      <div className="ForwarderTypeListItem-name">{forwarderType.name}</div>
    </Link>
  )
}

export default ForwarderTypeListItem;
