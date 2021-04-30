import React, { Component } from "react";
import Work from "./Work";
import Informatsion from "./Informatsion";
class App extends Component {
  render() {
    return (
      <div>
        <Informatsion />
        <Work />
      </div>
    );
  }
}

export default App;
