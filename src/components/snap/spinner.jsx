import _ from "lodash";
import React, { PropTypes } from "react";
import ClassNames from "classnames";

var Spinner = React.createClass({
  propTypes: {
    size: PropTypes.oneOf(['small', 'large'])
  },

  getDefaultPropTypes: function() {
    return {
      size: 'large'
    }
  },

  render: function() {
    return (
      <div className="Spinner Spinner--default Spinner--lg">
        <span className="Spinner_dot Spinner_dot--first" />
        <span className="Spinner_dot Spinner_dot--second" />
        <span className="Spinner_dot Spinner_dot--third" />
      </div>
    );
  }

});

module.exports = Spinner
