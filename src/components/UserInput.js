import React, { Component } from "react";
import Informatsion from "./Informatsion";
import Work from "./Work";
import Studies from "./Studies";

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      information: [
        {
          firstName: "",
          lastName: "",
          email: "",
          tel: "",
          linkedin: "",
          github: "",
          bio: "",
        },
      ],
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
      this.setState({ work });
    } else if (
      ["schoolName", "studyArea", "schoolStartDate", "schoolEndDate"].includes(
        e.target.className
      )
    ) {
      let studies = [...this.state.studies];
      studies[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ studies });
    } else if (
      [
        "firstName",
        "lastName",
        "email",
        "tel",
        "linkedin",
        "github",
        "bio",
      ].includes(e.target.className)
    ) {
      let information = [...this.state.information];
      information[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ information });
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
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state.work);
  //   console.log(this.state.studies);
  //   console.log(this.state.information);
  //   console.log(this.state);
  // };

  render() {
    let { work } = this.state;
    let { studies } = this.state;
    let { information } = this.state;
    return (
      <div onChange={this.handleChange}>
        <Informatsion information={information} />
        <h1>Experience</h1>

        <button onClick={this.addWork}>Add work experience</button>
        <Work work={work} />
        <h1>Education</h1>

        <button onClick={this.addStudies}>Add education</button>
        <Studies studies={studies} />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default UserInput;
