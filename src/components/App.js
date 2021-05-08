import React, { Component } from "react";
import Display from "./Display";
import "../styles/UserInput.css";

function PreviewButton(props) {
  return (
    <button className="preview" onClick={props.onClick}>
      Preview
    </button>
  );
}
function EditButton(props) {
  return (
    <button className="preview" onClick={props.onClick}>
      Edit
    </button>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePreviewClick = this.handlePreviewClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.state = { isFinished: false };
  }
  handlePreviewClick() {
    this.setState({ isFinished: true });
  }
  handleEditClick() {
    this.setState({ isFinished: false });
  }
  render() {
    const isFinished = this.state.isFinished;
    let button;
    if (isFinished) {
      button = <EditButton onClick={this.handleEditClick} />;
    } else {
      button = <PreviewButton onClick={this.handlePreviewClick} />;
    }
    return (
      <div>
        <Display isFinished={isFinished} />
        <div className="prevBtn">{button}</div>
      </div>
    );
  }
}

export default App;
