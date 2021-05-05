import React, { Component } from "react";
import Information from "./Informatsion";

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      information: "",
      experience: [
        {
          position: "",
          company: "",
          jobDescription: "",
          startDate: "",
          endDate: "",
        },
      ],
    };
  }

  render() {
    return (
      <form>
        <Information />
      </form>
    );
  }
}

export default UserInput;
