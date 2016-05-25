import _ from 'lodash'
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { DeviceConfigureSchemaContainer } from 'zooid-meshblu-device-editor'
import RefParser from 'json-schema-ref-parser'
import { updateForwarder } from '../../actions/forwarders/forwarders-actions'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
}

class Configure extends React.Component {
  constructor(props) {
    super(props);

    this.state = { configSchema: null }

    this.handleConfigUpdate = this.handleConfigUpdate.bind(this)
  }

  componentWillMount() {
    const { device } = this.props

    if (!device) return null
    if (_.isEmpty(device.schemas.configure)) return null

    RefParser.dereference(device.schemas.configure, (err, schema) => {

      if (err) {
        console.error('ERROR PARSING', err);
        return;
      }
      this.setState({configSchema: schema.default})
    })
  }

  handleConfigUpdate({properties, selected}) {
    const {device} = this.props
    this.props.dispatch(updateForwarder(device, properties))
  }

  render() {
    const {device} = this.props
    const {configSchema} = this.state

    if (!configSchema) return null;

    return (
      <div>
        <DeviceConfigureSchemaContainer
          schema={configSchema}
          device={device}
          onSubmit={this.handleConfigUpdate}
        />
      </div>
    )
  }
}

function mapStateToProps({ forwarders }) {
  const { device } = forwarders.selected

  return { device }
}

export default connect(mapStateToProps)(Configure)
