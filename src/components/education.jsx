import React, { Component } from "react";
import EducationForm from "./education-form";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);
    let { schoolname, study, beginDate, endDate } = this.props;
    this.state = {
      edit: false,
      schoolname,
      study,
      beginDate,
      endDate,
    };
  }

  startEdit = () => {
    this.setState({
      edit: true,
    });
  };

  submitForm = (data) => {
    let { schoolname, study, beginDate, endDate } = data;
    this.setState({
      edit: false,
      schoolname,
      study,
      beginDate,
      endDate,
    });
  };

  render() {
    let { schoolname, study, beginDate, endDate } = this.state;
    if (this.state.edit === false) {
      return (
        <div id="education">
          <h3>{schoolname}</h3>
          <h4>{study}</h4>
          <p>
            From {beginDate} to {endDate}
          </p>
          <button id="delete">Delete</button>
          <button id="edit" onClick={this.startEdit}>
            Edit
          </button>
        </div>
      );
    } else if (this.state.edit === true) {
      return (
        <React.Fragment>
          <h4>Edit Education</h4>
          <EducationForm
            key={uniqid()}
            onSubmit={this.submitForm}
            schoolname={schoolname}
            study={study}
            beginDate={beginDate}
            endDate={endDate}
          />
        </React.Fragment>
      );
    }
  }
}

export default Education;
