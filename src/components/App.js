import React, { Component } from "react";
import Work from "./Work";
import PersonalInfo from "./PersonalInfo";
class App extends Component {
  render() {
    return (
      <div>
        <PersonalInfo />
        <Work />
      </div>
    );
  }
}

export default App;
