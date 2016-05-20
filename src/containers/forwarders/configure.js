import _ from 'lodash'
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { SchemaContainer } from 'zooid-meshblu-device-editor';


const propTypes = {
  dispatch: PropTypes.func.isRequired,
}

class Configure extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {device} = this.props

    if (!device) return null;

    return (
      <div>
        CONFIGURE
        <SchemaContainer
          schema={device.schemas.configure}
          device={device.forwarderConfig}
          onSubmit={_.noop}
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
