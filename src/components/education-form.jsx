import React, { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolname: "",
      study: "",
      beginDate: "",
      endDate: "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          onChange={this.handleChange}
          type="text"
          name="schoolname"
          id="school"
          placeholder="School Name"
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          name="study"
          id="study"
          placeholder="Study"
        ></input>
        <input
          onChange={this.handleChange}
          type="date"
          name="beginDate"
          id="beginDate"
          placeholder="Beginning Date"
        ></input>
        <input
          onChange={this.handleChange}
          type="date"
          name="endDate"
          id="endDate"
          placeholder="Ending Date"
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EducationForm;
