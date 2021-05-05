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

  handleChange = (e) => {
    if (
      [
        "position",
        "company",
        "jobDescription",
        "startDate",
        "endDate",
      ].includes(e.target.className)
    ) {
      let work = [...this.state.work];
      work[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ work }, () => console.log(this.state.work));
    } else if (
      ["schoolName", "studyArea", "schoolStartDate", "schoolEndDate"].includes(
        e.target.className
      )
    ) {
      let studies = [...this.state.studies];
      studies[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ studies }, () => console.log(this.state.studies));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

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
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <Information />
        <button onClick={this.addWork}>Add work experience</button>
        <Work work={work} />
        <button onClick={this.addStudies}>Add education</button>
        <Studies studies={studies} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UserInput;
