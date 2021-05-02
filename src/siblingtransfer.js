import React, { Component } from "react";
import Work from "./Work";
import Informatsion from "./Informatsion";
import Studies from "./Studies";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value_key: "",
    };
  }
  parentFunction = (data_from_child) => {
    this.setState({ value_key: data_from_child });
  };
  render() {
    return (
      <div>
        <Child1 functionCallFromParent={this.parentFunction.bind(this)} />
        <Child2 valueFromParent={this.state.value_key} />
      </div>
    );
  }
}
class Child1 extends Component {
  childFunction = (e) => {
    e.preventDefault();
    this.props.functionCallFromParent("Hello From Child1");
  };
  render() {
    return (
      <div>
        <button onClick={this.childFunction.bind(this)}>Click</button>
      </div>
    );
  }
}
class Child2 extends Component {
  render() {
    return (
      <div>
        <h2>Child 2</h2>
        <h2>{this.props.valueFromParent}</h2>
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
