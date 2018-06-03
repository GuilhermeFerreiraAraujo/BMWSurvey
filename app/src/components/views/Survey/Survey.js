
import React, { Component } from 'react';

import * as SurveyLib from 'survey-react';

import './Survey.css';

import Questions from './Questions.json';


window.survey = new SurveyLib.Model(Questions);



class Survey extends Component {


  onValueChanged(result) {
    console.log(Questions.questions);

    Questions.questions.push({name: "teste", 
                              type: "text", 
                              inputType: "number", 
                              title: "How many BMW did you drive?"});
    console.log(result.data);
  }

  onComplete(result) {
    console.log("Complete! " + result);
  }


  renderSurvey(){
    
    var model = new SurveyLib.Model(Questions);

    


    return (
      <SurveyLib.Survey 
      model={model} 
      onComplete={this.onComplete} 
      onValueChanged={this.onValueChanged}/>


    );

         


  }


  render() {
    return (
      <div className="bs-survey">
      {this.renderSurvey()}
       survey component here
      </div>
    );
  }
}

export default Survey;