// this is root component for surveyRoutes
// Here we will manage our surveyFeild and surveyForm and provide
// data using redux to surveyReview

import React, { Component } from "react";
import SurveyForm from "./surveyForm";
class surveyNew extends Component {
  render() {
    return (
      <div>
        <SurveyForm />
      </div>
    );
  }
}
export default surveyNew;
