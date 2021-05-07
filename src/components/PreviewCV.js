import React, { Component } from "react";
import UserInput from "./UserInput";

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
    //studies array
    const studiesArr = data.studies;
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
        <div>
          <h3>Studies</h3>
          {studiesArr.map((item) =>
            Object.keys(item).map((key, index) => (
              <p key={index}>{item[key]}</p>
            ))
          )}
        </div>
      </div>
    );
  }
}
export default PreviewCV;
