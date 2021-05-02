import React, { Component } from "react";
import Work from "./Work";
import Informatsion from "./Informatsion";
import Studies from "./Studies";

//Child to parent component

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "something",
    };
  }
  handleCallback = (childData) => {
    this.setState({ data: childData });
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <Child parentCallback={this.handleCallback} />
        {data}
      </div>
    );
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "onbes",
    };
  }

  onTrigger = (event) => {
    this.props.parentCallback(this.state.input);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onTrigger}>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Parent />
        {/* <Informatsion />
        <Work />
        <Studies />
        <button type="submit">Submit</button> */}
      </div>
    );
  }
}

export default App;
