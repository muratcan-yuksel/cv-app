import React, { Component } from "react";
import Work from "./Work";
import Informatsion from "./Informatsion";
import Studies from "./Studies";
import UserInput from "./UserInput";

//this one will be the html elements
class PreviewCV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.toChild,
    };
  }

  render() {
    const { data } = this.state;
    //information as object
    const infoObj = data.information[0];
    //work as array
    const workArr = data.work;
    console.log(workArr);
    console.log(data);
    return (
      <div>
        <div>
          <h3>Personal Information</h3>
          {Object.keys(infoObj).map((key, index) => (
            <p key={index}>{infoObj[key]}</p>
          ))}
        </div>
        <div>
          <h3>Experience</h3>
          {workArr.map((item) =>
            Object.keys(item).map((key, index) => (
              <p key={index}>{item[key]}</p>
            ))
          )}
        </div>
      </div>
    );
  }
}

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
function PreviewButton(props) {
  return <button onClick={props.onClick}>Preview</button>;
}
function EditButton(props) {
  return <button onClick={props.onClick}>Edit</button>;
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
