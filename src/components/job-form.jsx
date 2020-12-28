import React, { Component } from "react";

class JobForm extends Component {
  constructor(props) {
    super(props);
    let { company, position, beginYear, endYear, description } = this.props;
    this.state = {
      company,
      position,
      beginYear,
      endYear,
      description,
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
    let { company, position, beginYear, endYear, description } = this.state;
    if (
      company.length === 0 ||
      position.length === 0 ||
      beginYear.length === 0 ||
      endYear.length === 0 ||
      description.length === 0
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
            <span className="input-group-text">Company name and position</span>
          </div>
          <input
            onChange={this.handleChange}
            type="text"
            name="company"
            id="company"
            className="form-control"
            value={this.state.company}
          ></input>
          <input
            onChange={this.handleChange}
            type="text"
            name="position"
            id="position"
            className="form-control"
            value={this.state.position}
          ></input>
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Starting- and endingyear</span>
          </div>
          <input
            onChange={this.handleChange}
            type="number"
            min="1900"
            max="2099"
            name="beginYear"
            id="beginYear"
            className="form-control"
            value={this.state.beginYear}
          ></input>
          <input
            onChange={this.handleChange}
            type="number"
            min="1900"
            max="2099"
            name="endYear"
            id="endYear"
            className="form-control"
            value={this.state.endYear}
          ></input>
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Description</span>
          </div>
          <textarea
            onChange={this.handleChange}
            name="description"
            id="description"
            className="form-control"
            value={this.state.description}
          ></textarea>
        </div>
        <button className="btn btn-secondary" type="submit">
          Submit
        </button>
        {this.state.alert}
      </form>
    );
  }
}

export default JobForm;
