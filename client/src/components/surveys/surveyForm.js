import React, { Component } from "react";
import { reduxForm } from "redux-form";
class surveyForm extends Component {
  render() {
    return <div>hello there i am from surveyForm</div>;
  }
}
export default reduxForm({
  form: "surveyForm"
})(surveyForm);
