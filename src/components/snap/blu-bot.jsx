import React, { PropTypes } from "react"
import _ from "lodash"

var ReactBluBot = React.createClass({

  render: function() {
    const luckyRobotNumber = _.random(1, 9)
    return (
      <img src={`//cdn.octoblu.com/robots/robot${luckyRobotNumber}.png`} alt="Lucky Blu Bot" className="BluBot"/>
    );
  }

});

module.exports = ReactBluBot
