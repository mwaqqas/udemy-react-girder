import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    // event.preventDefault();
    console.log(formValues);
  }

  render() {
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter description"
          />
          <button className="ui button primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Title cannot be empty';
  }
  if (!formValues.description) {
    errors.description = 'Description cannot be empty';
  }
  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate: validate,
})(StreamCreate);
