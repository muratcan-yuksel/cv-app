import React, { Component } from "react";

class Studies extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <form>
        <h1>Education</h1>
        <div>
          <input type="text" placeholder="School name here" />
        </div>
        <div>
          <input type="text" placeholder="Study area" />
        </div>
        <div>
          <label>Start date</label>
          <input type="date"></input>
        </div>
        <div>
          <label>End date</label>
          <input type="date"></input>
        </div>
      </form>
    );
  }
}
export default Studies;
