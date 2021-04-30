import React, { Component } from "react";

class PersonalInfo extends Component {
  render() {
    return (
      <form>
        <h1>Personal Information</h1>
        <div>
          <input type="text" placeholder="Your name here" />
        </div>
      </form>
    );
  }
}

export default PersonalInfo;
