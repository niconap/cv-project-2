import React, { Component } from "react";
import JobForm from "./job-form";
import uniqid from "uniqid";

class Job extends Component {
  constructor(props) {
    super(props);
    let { company, position, beginYear, endYear, description } = this.props;
    this.state = {
      edit: false,
      company,
      position,
      beginYear,
      endYear,
      description,
    };
  }

  startEdit = () => {
    this.setState({
      edit: true,
    });
  };

  submitForm = (data) => {
    let { company, position, beginYear, endYear, description } = data;
    this.setState({
      edit: false,
      company,
      position,
      beginYear,
      endYear,
      description,
    });
  };

  render() {
    let { company, position, beginYear, endYear, description } = this.state;
    if (this.state.edit === false) {
      return (
        <div id="Job">
          <h3>{company}</h3>
          <h4>{position}</h4>
          <p>
            From {beginYear} to {endYear}
          </p>
          <p>{description}</p>
          <button
            id="delete"
            className="btn btn-danger"
            onClick={() => this.props.onDelete(this.props.id)}
          >
            Delete
          </button>
          <button
            id="edit"
            className="btn btn-secondary"
            onClick={this.startEdit}
          >
            Edit
          </button>
        </div>
      );
    } else if (this.state.edit === true) {
      return (
        <React.Fragment>
          <h4>Edit Job</h4>
          <JobForm
            key={uniqid()}
            onSubmit={this.submitForm}
            company={company}
            position={position}
            beginYear={beginYear}
            endYear={endYear}
            description={description}
          />
        </React.Fragment>
      );
    }
  }
}

export default Job;
