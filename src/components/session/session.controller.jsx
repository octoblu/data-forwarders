var React = require('react');

var Session = React.createClass({
  render: function() {
    console.log('Location', this.props.location);
    return (
      <div>
        <p>UUID</p>
        <p>Token</p>
      </div>
    )
  }
});

module.exports = Session;
