import _ from 'lodash'
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  fetchTypes,
  fetchForwarderTypeById,
  unsetActiveForwarderType,
  setActiveForwarderType
} from '../actions/types/types-actions'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export class Configure extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, routeParams, forwarderTypes } = this.props

    if (!forwarderTypes.length) {
      dispatch(fetchTypes())
      return
    }

    dispatch(fetchForwarderTypeById(routeParams.forwarderTypeId))
  }

  componentWillReceiveProps(nextProps) {
    const { activeForwarderType, dispatch, forwarderTypes, routeParams } = nextProps

    if (!forwarderTypes.length) return;
    // if (!activeForwarderType) return;

    // dispatch(fetchForwarderTypeById(routeParams.forwarderTypeId))
    // console.log('CHECK', activeForwarderType.deviceType, this.props.activeForwarderType.deviceType);
    // if (activeForwarderType.deviceType !== this.props.activeForwarderType.deviceType) {
    // }
  }

  componentWillUnmount() {
    this.props.dispatch(unsetActiveForwarderType())
  }

  render() {
    const { activeForwarderType } = this.props

    if (_.isEmpty(activeForwarderType)) return <div>Loading...</div>

    return (
      <div>
        <h1>Configure - {activeForwarderType.name}</h1>
      </div>
    )
  }
}

Configure.propTypes = propTypes

function mapStateToProps({ activeForwarderType, types }) {
  return {
    activeForwarderType,
    forwarderTypes: types.items
  }
}

export default connect(mapStateToProps)(Configure)
