import React, { Component } from "react";
import Work from "./Work";
import Informatsion from "./Informatsion";
import Studies from "./Studies";

class AppComponent extends React.Component {
  state = {
    numChildren: 0,
  };

  render() {
    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<ChildComponent key={i} number={i} />);
    }

    return (
      <ParentComponent addChild={this.onAddChild}>{children}</ParentComponent>
    );
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1,
    });
  };
}

const ParentComponent = (props) => (
  <div className="card calculator">
    <p>
      <a href="#" onClick={props.addChild}>
        Add Another Child Component
      </a>
    </p>
    <div id="children-pane">{props.children}</div>
  </div>
);

const ChildComponent = (props) => <div>{"I am child " + props.number}</div>;

class App extends Component {
  render() {
    return (
      <div>
        <AppComponent />
        {/* <Informatsion />
        <Work />
        <Studies />
        <button type="submit">Submit</button> */}
      </div>
    );
  }
}

export default App;
