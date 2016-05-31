import _ from 'lodash'
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { SchemaContainer } from 'zooid-meshblu-device-editor';
import { Breadcrumb, Message, Spinner, Page, PageHeader, PageTitle, PageActions } from 'zooid-ui';

import { createForwarder } from '../../actions/forwarders/forwarders-actions'

import {
  fetchTypes,
  fetchForwarderTypeByDeviceType
} from '../../actions/types/types-actions'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  breadcrumbs: PropTypes.array
}

const defaultProps = {
  breadcrumbs: [
    { component: <Link to="/">Forwarders</Link> },
    { component: <Link to="/new">Create</Link> },
    { label: 'Configure' }
  ]
}


export class Configure extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { dispatch, routeParams, forwarderTypes } = this.props

    if (forwarderTypes.length) {
      dispatch(fetchForwarderTypeByDeviceType(routeParams.forwarderDeviceType))
    }
  }

  handleSubmit(model) {
    this.props.dispatch(createForwarder(model))
  }

  render() {
    const { activeForwarderType, breadcrumbs } = this.props

    if (_.isEmpty(activeForwarderType)) return <Spinner />

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
      <Page width="small">
        <PageHeader>
          {/*<PageTitle>Configure - {activeForwarderType.name}</PageTitle>*/}
          <Breadcrumb fragments={breadcrumbs}/>
        </PageHeader>

        {schemaEditor}
      </Page>
    )
  }
}

Configure.propTypes    = propTypes
Configure.defaultProps = defaultProps

function mapStateToProps({ activeForwarderType, types }) {
  return {
    activeForwarderType,
    forwarderTypes: types.items
  }
}

export default connect(mapStateToProps)(Configure)
