import React, { Component } from "react";
import Work from "./Work";
import Informatsion from "./Informatsion";
import Studies from "./Studies";

//this one will be the html elements
function PreviewCV(props) {
  return <h1>Previewing your CV</h1>;
}
//this one will be the form
function UserInput(props) {
  return <h1>Please sign up</h1>;
}
function Display(props) {
  const isFinished = props.isFinished;
  if (isFinished) {
    return <PreviewCV />;
  }
  return <UserInput />;
}
function PreviewButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}
function EditButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
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
        {button}
        {/* <Informatsion />
        <Work />
        <Studies />
        <button type="submit">Submit</button> */}
      </div>
    );
  }
}

export default App;
