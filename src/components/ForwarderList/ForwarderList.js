import _ from 'lodash'
import React, { PropTypes } from 'react';

import ForwarderListItem from './ForwarderListItem';

const propTypes = {
  forwarders: PropTypes.array.isRequired,
};

const ForwarderList = ({ forwarders }) => {
  if (_.isEmpty(forwarders))  return null;

  const items = _.map(forwarders, (forwarder, index) => {
    return <ForwarderListItem forwarder={forwarder} key={index} />;
  })

  return <div>{items}</div>;
};

ForwarderList.propTypes = propTypes;

export default ForwarderList;
