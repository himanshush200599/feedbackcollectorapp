import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./surveyField";
import validateEmails from "../../utils/validateEmails";
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
          name="recipients"
          component={SurveyField}
        />
      </div>
    );
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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
  errors.recipients = validateEmails(values.recipients || "");
  if (!values.title) {
    errors.title = "You must provide a title";
  }
  if (!values.subject) {
    errors.subject = "You must provide a subject";
  }
  if (!values.body) {
    errors.body = "You must provide some text message here";
  }
  if (!values.recipients) {
    errors.emails = "You must provide list of emails ";
  }

  return errors;
}
export default reduxForm({
  validate,
  destroyOnUnmount: false,
  form: "surveyForm"
})(surveyForm);
