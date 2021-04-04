// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import history from '../../history';

const ProjectFormReview = ({ onCancel, formValues, submitProject }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div className = "ui list" key={name}>
        <label className = "ui header" style = {{color: '#21ADA8'}}>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  const SubmitProjectValues = (formValues, history)=>{
    submitProject(formValues);
    history.push('/projects');
  }

  return (
    <div>
      <h2 className = "ui header">Please confirm your entries</h2>
      {reviewFields}
      <button
        className="ui button"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => SubmitProjectValues(formValues, history)}
        className="ui primary button"
      >
        Create Project
        <i className="material-icons right"></i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.projectForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(ProjectFormReview));
