import React, { Component } from "react";
import JobForm from "./job-form";
import uniqid from "uniqid";
import Job from "./job";

class Jobs extends Component {
  state = {
    form: "",
    jobs: [],
  };

  submitForm = (data) => {
    let { company, position, beginYear, endYear, description } = data;
    let newElement = (
      <Job
        company={company}
        position={position}
        beginYear={beginYear}
        endYear={endYear}
        description={description}
        key={uniqid()}
        id={uniqid()}
        onDelete={this.deleteJob}
      />
    );
    console.log(newElement);
    let array = [...this.state.jobs, newElement];
    this.setState({
      jobs: array,
      form: "",
    });
  };

  newForm = () => {
    this.setState({
      form: (
        <JobForm
          key={uniqid()}
          onSubmit={this.submitForm}
          company=""
          position=""
          beginYear=""
          endYear=""
          description=""
        />
      ),
    });
  };

  deleteJob = (id) => {
    let array = this.state.jobs.filter((element) => {
      if (element.props.id === id) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({
      jobs: array,
    });
  };

  render() {
    return (
      <div id="jobs">
        <h2>Job experience</h2>
        <button
          className="btn btn-primary rounded-circle"
          onClick={this.newForm}
        >
          +
        </button>
        {this.state.form}
        {this.state.jobs}
      </div>
    );
  }
}

export default Jobs;
