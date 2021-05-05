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

  render() {
    let { work } = this.state;
    let { studies } = this.state;
    return (
      <form>
        <Information />
        <Work work={work} />
        <Studies studies={studies} />
      </form>
    );
  }
}

export default UserInput;
