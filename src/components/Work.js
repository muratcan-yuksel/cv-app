import React, { Component } from "react";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <form>
        <h1>Experience</h1>
        <div>
          <input type="text" placeholder="Your position here" />
        </div>
        <div>
          <input type="text" placeholder="Company name here" />
        </div>
        <div>
          <input type="text" placeholder="Job description(Optional)" />
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

export default Work;
