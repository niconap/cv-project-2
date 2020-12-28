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
      alert: "",
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
    if (this.checkInputs()) {
      this.props.onSubmit(this.state);
      this.setState({
        alert: "",
      });
    }
  };

  checkInputs = () => {
    let { schoolname, study, beginDate, endDate } = this.state;
    if (
      schoolname.length === 0 ||
      study.length === 0 ||
      beginDate.length === 0 ||
      endDate.length === 0
    ) {
      this.setState({
        alert: (
          <p className="badge badge-warning ml-3">
            Please enter something in all inputs!
          </p>
        ),
      });
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">School and study</span>
          </div>
          <input
            onChange={this.handleChange}
            type="text"
            name="schoolname"
            id="school"
            className="form-control"
            value={this.state.schoolname}
          ></input>
          <input
            onChange={this.handleChange}
            type="text"
            name="study"
            id="study"
            className="form-control"
            value={this.state.study}
          ></input>
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Starting- and endingdate</span>
          </div>
          <input
            onChange={this.handleChange}
            type="date"
            name="beginDate"
            id="beginDate"
            className="form-control"
            value={this.state.beginDate}
          ></input>
          <input
            onChange={this.handleChange}
            type="date"
            name="endDate"
            id="endDate"
            className="form-control"
            value={this.state.endDate}
          ></input>
        </div>
        <button className="btn btn-secondary" type="submit">
          Submit
        </button>
        {this.state.alert}
      </form>
    );
  }
}

export default EducationForm;
