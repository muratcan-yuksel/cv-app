import React, { Component } from "react";
import UserInput from "./UserInput";
import PreviewCV from "./PreviewCV";

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
  handleCallback = (childData) => {
    this.setState({ data: childData });
  };
  render() {
    const { data } = this.state;
    const isFinished = this.props.isFinished;
    if (isFinished) {
      return <PreviewCV toChild={data} />;
    }
    return <UserInput parentCallback={this.handleCallback} />;
  }
}

export default Display;
