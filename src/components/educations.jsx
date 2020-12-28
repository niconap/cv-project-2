import React, { Component } from "react";
import EducationForm from "./education-form";
import uniqid from "uniqid";
import Education from "./education";

class Educations extends Component {
  state = {
    form: "",
    educations: [],
  };

  submitForm = (data) => {
    let { schoolname, study, beginDate, endDate } = data;
    let newElement = (
      <Education
        schoolname={schoolname}
        study={study}
        beginDate={beginDate}
        endDate={endDate}
        key={uniqid()}
        id={uniqid()}
        onDelete={this.deleteEducation}
      />
    );
    console.log(newElement);
    let array = [...this.state.educations, newElement];
    this.setState({
      educations: array,
      form: "",
    });
  };

  newForm = () => {
    this.setState({
      form: (
        <EducationForm
          key={uniqid()}
          onSubmit={this.submitForm}
          schoolname=""
          study=""
          beginDate=""
          endDate=""
        />
      ),
    });
  };

  deleteEducation = (id) => {
    let array = this.state.educations.filter((element) => {
      if (element.props.id === id) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({
      educations: array,
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

export default Educations;
