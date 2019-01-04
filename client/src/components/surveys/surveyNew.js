// this is root component for surveyRoutes
// Here we will manage our surveyFeild and surveyForm and provide
// data using redux to surveyReview

import React, { Component } from "react";
import surveyForm from "./surveyForm";
class surveyNew extends Component {
  render() {
    return (
      <div>
        <surveyForm />
        <p>Fro surveyNew</p>
      </div>
    );
  }
}
export default surveyNew;
