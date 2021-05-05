import React, { Component } from "react";
import Information from "./Informatsion";

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = { information: "" };
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
