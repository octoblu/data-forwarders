import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { createForwarder } from '../../actions/forwarders/forwarders-actions'

import {
  fetchTypes,
  fetchForwarderTypeById,
  unsetActiveForwarderType,
  setActiveForwarderType
} from '../../actions/types/types-actions'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  forwarder: PropTypes.object,
}

class ForwardersShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {forwarder} = this.props;
    if (_.isEmpty(forwarder)) console.log('No Forwarder');
  }

  render() {
    const {error, fetching, forwarder, routeParams} = this.props
    const {forwarderUuid} = routeParams

    if (fetching) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    if (_.isEmpty(forwarder)) return <div>Error: No forwarder with UUID {forwarderUuid} </div>

    return (
      <div>
        <div>
          <div>Forwarder: </div>
          <div>Type: </div>
          <div>Subscriptions: </div>
        </div>

        <div>
          <ul role="tablist">
            <li role="tab" aria-selected="true" aria-expanded="true" aria-controls="react-tabs-1" tabindex="0" selected="selected">
              Configurations
            </li>
            <li role="tab" aria-selected="false" aria-expanded="false" aria-controls="react-tabs-3">
              Device Subscriptions
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


ForwardersShow.propTypes = propTypes

function mapStateToProps({ forwarders }) {
  const { error, fetching, items, selectedUuid } = forwarders
  console.log('items', items, 'selected');
  return {
    error,
    fetching,
    forwarder: _.find(items, {uuid: selectedUuid}),
  }
}

export default connect(mapStateToProps)(ForwardersShow)
