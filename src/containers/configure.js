import _ from 'lodash'
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchTypes, unsetActiveForwarderType, setActiveForwarderType } from '../actions/types/types-actions'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export class Configure extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, routeParams, types } = this.props

    if (!types.items.length) return dispatch(fetchTypes());
    dispatch(setActiveForwarderType(types.items, routeParams.forwarderType))
  }

  componentWillReceiveProps({dispatch, routeParams, types}) {
    if (!types.items.length) return;

    dispatch(setActiveForwarderType(types.items, routeParams.forwarderType))
  }

  componentWillUnmount() {
    // this.props.dispatch(unsetActiveForwarderType())
  }

  render() {
    const {activeForwarderType, types} = this.props

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
  return { activeForwarderType, types }
}

export default connect(mapStateToProps)(Configure)
