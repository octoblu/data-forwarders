import React from "react"

var Login = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Login</h2>

      <a href="http://localhost:8888/?callback=http%3A%2F%2Flocalhost%3A7777%2Fsession%3F">
          <span>Github</span>
        </a>
      </div>
    )
  }
});

module.exports = Login;
