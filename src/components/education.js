import React, { Component } from "react";
import EducationForm from "./education-form";
import uniqid from "uniqid";

class Education extends Component {
  state = {
    form: "",
    educations: [],
  };

  submitForm = (data) => {
    let { schoolname, study, beginDate, endDate } = data;
    let newElement = (
      <div id="education" key={uniqid()}>
        <h3>{schoolname}</h3>
        <h4>{study}</h4>
        <p>
          From {beginDate} to {endDate}
        </p>
        <button id="delete">Delete</button>
      </div>
    );
    let array = [...this.state.educations, newElement];
    this.setState({
      educations: array,
      form: "",
    });
  };

  newForm = () => {
    this.setState({
      form: <EducationForm key={uniqid()} onSubmit={this.submitForm} />,
    });
  };

  render() {
    return (
      <div id="education">
        <h2>Educations</h2>
        <button onClick={this.newForm}>+</button>
        {this.state.form}
        {this.state.educations}
      </div>
    );
  }
}

export default Education;
