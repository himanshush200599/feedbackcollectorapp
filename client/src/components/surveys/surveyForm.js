import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./surveyField";
class surveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field
          type="text"
          label="Survey Title"
          name="title"
          component={SurveyField}
        />
        <Field
          type="text"
          label="Subject Line"
          name="subject"
          component={SurveyField}
        />
        <Field
          type="text"
          label="Email body"
          name="body"
          component={SurveyField}
        />
        <Field
          type="text"
          label="Recipient List"
          name="emails"
          component={SurveyField}
        />
      </div>
    );
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat white-text right">
            <i className="material-icons right">done</i>
            Next
          </button>
        </form>
      </div>
    );
  }
}
function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "You must provide a title";
  }
  return errors;
}
export default reduxForm({
  validate,
  form: "surveyForm"
})(surveyForm);
