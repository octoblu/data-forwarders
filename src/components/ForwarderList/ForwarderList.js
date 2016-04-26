import _ from 'lodash'
import React, { PropTypes } from 'react';

const propTypes = {
  forwarders: PropTypes.array.isRequired,
};

const ForwarderList = ({ forwarders }) => {
  if (_.isEmpty(forwarders))  return null;

  const items = _.map(forwarders, (forwarder, index) => {
    return <li key={index}>{forwarder}</li>;
  })

  return <ul>{items}</ul>;
}

ForwarderList.propTypes = propTypes;

export default ForwarderList;
