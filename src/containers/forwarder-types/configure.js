import _ from 'lodash'
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import {SchemaContainer} from 'zooid-meshblu-device-editor';

import {
  fetchTypes,
  fetchForwarderTypeById,
  unsetActiveForwarderType,
  setActiveForwarderType
} from '../../actions/types/types-actions'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export class Configure extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { dispatch, routeParams, forwarderTypes } = this.props

    if (forwarderTypes.length) {
      dispatch(fetchForwarderTypeById(routeParams.forwarderTypeId))
    }
  }

  handleSubmit(model) {
    console.log('Submit', model);
  }

  render() {
    const { activeForwarderType } = this.props
    if (_.isEmpty(activeForwarderType)) return <div>Loading...</div>

    const { configSchema } = activeForwarderType

    let schemaEditor = null
    if (configSchema) {
      schemaEditor = (
        <SchemaContainer
          schema={configSchema}
          onSubmit={this.handleSubmit}
        />
      )
    }

    return (
      <div>
        <h1>Configure - {activeForwarderType.name}</h1>
        {schemaEditor}
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
