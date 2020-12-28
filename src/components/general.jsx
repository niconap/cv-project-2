import React, { Component } from "react";

class General extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    summary: "",
    submitted: false,
    alert: "",
  };

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
      this.setState({
        alert: "",
        submitted: true,
      });
    }
  };

  startEdit = () => {
    this.setState({
      submitted: false,
    });
  };

  checkInputs = () => {
    let { firstname, lastname, email, summary } = this.state;
    if (
      firstname.length === 0 ||
      lastname.length === 0 ||
      email.length === 0 ||
      summary.length === 0
    ) {
      this.setState({
        alert: (
          <p className="badge badge-warning">
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
    if (this.state.submitted === false) {
      return (
        <div id="general" className="mt-3 ml-3 bg-light rounded p-2">
          <h2>General Information</h2>
          <form onSubmit={this.submitForm}>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">First and last name</span>
              </div>
              <input
                value={this.state.firstname}
                onChange={this.handleChange}
                type="text"
                name="firstname"
                className="form-control"
              ></input>
              <input
                value={this.state.lastname}
                onChange={this.handleChange}
                type="text"
                name="lastname"
                className="form-control"
              ></input>
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">E-Mail Address</span>
              </div>
              <input
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                className="form-control"
              ></input>
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">About yourself</span>
              </div>
              <textarea
                value={this.state.summary}
                onChange={this.handleChange}
                name="summary"
                className="form-control"
              ></textarea>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
          {this.state.alert}
        </div>
      );
    } else {
      let { firstname, lastname, email, summary } = this.state;
      return (
        <div id="general" className="mt-3 ml-3 bg-light rounded p-2">
          <h3>
            {firstname} {lastname}{" "}
          </h3>
          <p>{email}</p>
          <p>{summary}</p>
          <button onClick={this.startEdit} className="btn btn-secondary">
            Edit
          </button>
        </div>
      );
    }
  }
}

export default General;
