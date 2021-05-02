import React, { Component } from "react";
import Work from "./Work";
import Informatsion from "./Informatsion";
import Studies from "./Studies";

class App extends Component {
  render() {
    return (
      <div>
        <Informatsion />
        <Work />
        <Studies />
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default App;
