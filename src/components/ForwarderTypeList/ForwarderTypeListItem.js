import _ from 'lodash'
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, DeviceIcon } from 'zooid-ui';

const propTypes = {
  forwarderType: PropTypes.object.isRequired,
}

const ForwarderTypeListItem = ({ forwarderType }) => {
  return (
    <Card>
      <Link to={`/new/${forwarderType.uuid}`}>
        <DeviceIcon type={forwarderType.deviceType} />
        {forwarderType.name}
      </Link>
    </Card>
  )
}

export default ForwarderTypeListItem;
