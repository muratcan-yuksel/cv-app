import React, { Component } from "react";
import Information from "./Informatsion";
import Work from "./Work";
import Studies from "./Studies";

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      information: "",
      work: [
        {
          position: "",
          company: "",
          jobDescription: "",
          startDate: "",
          endDate: "",
        },
      ],
      studies: [
        {
          schoolName: "",
          studyArea: "",
          schoolStartDate: "",
          schoolEndDate: "",
        },
      ],
    };
  }
  addWork = (e) => {
    this.setState((prevState) => ({
      work: [
        ...prevState.work,
        {
          position: "",
          company: "",
          jobDescription: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };
  addStudies = (e) => {
    this.setState((prevState) => ({
      studies: [
        ...prevState.studies,
        {
          schoolName: "",
          studyArea: "",
          schoolStartDate: "",
          schoolEndDate: "",
        },
      ],
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.work);
    console.log(this.state.studies);
    console.log(this.state.information);
  };

  render() {
    let { work } = this.state;
    let { studies } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Information />
        <button onClick={this.addWork}>Add work experience</button>
        <Work work={work} />
        <button onClick={this.addStudies}>Add education</button>
        <Studies studies={studies} />
      </form>
    );
  }
}

export default UserInput;
