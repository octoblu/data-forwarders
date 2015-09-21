import _ from "lodash"
import React, {PropTypes} from "react"
import FormField from "./form-field"

var SchemaForm = React.createClass({
  propTypes: {
    onSubmit: PropTypes.func.isRequired,
    schema: PropTypes.object
  },

  getDefaultProps: function() {
    return {
      fields: {}
    }
  },

  handleChange: function(e) {
    const {name, value} = e.target;
    if (value) {
      this.props.fields[name] = value;
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onSubmit(this.props.fields);
  },

  renderFields: function() {
    const { schema } = this.props;
    let fields;
    if (!schema.properties) {
      fields = null;
      return;
    }

    fields = _.map(_.keys(schema.properties), (key, index) => {
      return (
        <FormField label={schema.properties[key].title}>
          <input type="text" required={schema.properties[key].required} name={key}/>
        </FormField>
      );
    });

    return fields;
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        {this.renderFields()}
        <button className="button button-primary" type="submit">Submit</button>
      </form>
    );
  }
});


export default SchemaForm;
