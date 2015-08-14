import React from "react"

import Alert from "./snap/alert"
import Button from "./snap/button"
import EmptyState from "./snap/empty-state"
import Filter from "./snap/filter"
import Link from "./snap/link"

var StyleGuide = React.createClass({
  handleFilter: function(value) {
    console.log('I should filter my collection with value', value)
  },

  render: function() {
    return (
      <div>
        <h2>Style Guide</h2>

        <Link>Link</Link>

        <div>
          <Button kind="primary">Primary Button</Button>
          <Button kind="warning">Warning Button</Button>
          <Button kind="outline">Outline Button </Button>
        </div>

        <div>
          <Button kind="primary" block={true}>Primary Button - Block</Button>
          <Button kind="warning" block={true}>Warning Button - Block</Button>
          <Button kind="outline" block={true}>Outline Button - Block</Button>
        </div>

        <EmptyState collection={[]}>
          <p>You no have anything in da collection</p>
        </EmptyState>

        <Filter onFilter={this.handleFilter} />
        <div>
          <Alert>Awesome Alert</Alert>
        </div>
      </div>
    )
  }
});

module.exports = StyleGuide;
