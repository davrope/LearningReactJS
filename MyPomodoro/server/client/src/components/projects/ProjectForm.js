// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import ProjectField from './ProjectField';
// import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class ProjectForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={ProjectField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className = "ui form" >
        <form onSubmit={this.props.handleSubmit(this.props.onProjectSubmit)}>
          {this.renderFields()}
          <Link to="/projects" className="ui red button">
            Cancel
          </Link>
          <button type="submit" className="ui teal button">
            Next
            <i className="arrow right icon"></i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'projectForm',
  destroyOnUnmount: false
})(ProjectForm);
