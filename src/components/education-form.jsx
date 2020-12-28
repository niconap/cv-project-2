import React, { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    let { schoolname, study, beginDate, endDate } = this.props;
    this.state = {
      schoolname,
      study,
      beginDate,
      endDate,
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
        <div className="form-group">
          <input
            onChange={this.handleChange}
            type="text"
            name="schoolname"
            id="school"
            placeholder="School Name"
            value={this.state.schoolname}
          ></input>
          <input
            onChange={this.handleChange}
            type="text"
            name="study"
            id="study"
            placeholder="Study"
            value={this.state.study}
          ></input>
        </div>

        <div className="form-group">
          <input
            onChange={this.handleChange}
            type="date"
            name="beginDate"
            id="beginDate"
            placeholder="Beginning Date"
            value={this.state.beginDate}
          ></input>
          <input
            onChange={this.handleChange}
            type="date"
            name="endDate"
            id="endDate"
            placeholder="Ending Date"
            value={this.state.endDate}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EducationForm;
