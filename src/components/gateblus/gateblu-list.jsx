import React from "react"
import _ from "lodash"

var GatebluList = React.createClass({
  propTypes: {
    meshbluConnection: React.PropTypes.object.isRequired,
    onGatebluSelection: React.PropTypes.func.isRequired
  },
  getInitialState: function(){
    return {
      gateblus :[]
    }
  },

  componentDidMount: function(){
    var meshbluConnection = this.props.meshbluConnection;
    if(meshbluConnection){
      meshbluConnection.myDevices({
        type : 'device:gateblu'
      }, function(results, error){
        if (error) return;
        this.setState({
          gateblus : results.devices
        });
      });
    }
  },

  renderListItem: function(gateblu) {
    return (
      <a href={"/devices/" + gateblu.name} key={gateblu.uuid}>{gateblu.name}</a>
    )
  },

  render: function() {
    var gateblus = _.map(this.state.gateblus, this.renderListItem)
    return (
      <div>
        {gateblus}
      </div>
    );
  }
});

module.exports = GatebluList
