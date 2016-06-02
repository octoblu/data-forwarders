import _ from 'lodash'
import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router'

import ForwarderListItem from '../ForwarderListItem';

import './ForwarderList.css';

const propTypes = {
  forwarders: PropTypes.array.isRequired,
};

const ForwarderList = ({ forwarders }) => {
  if (_.isEmpty(forwarders)) return null;

  const items = _.map(forwarders, (forwarder, index) => {
    return <ForwarderListItem forwarder={forwarder} key={index} />;
  })

  return <div className="ForwarderList">{items}</div>;
};

ForwarderList.propTypes = propTypes;

export default ForwarderList;
