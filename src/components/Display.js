// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import UserInput from "./UserInput";
import PreviewCV from "./PreviewCV";

// class Display extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: null,
//     };
//   }
//   handleCallback = (childData) => {
//     this.setState({ data: childData });
//   };
//   render() {
//     const { data } = this.state;
//     const isFinished = this.props.isFinished;
//     if (isFinished) {
//       return <PreviewCV toChild={data} />;
//     }
//     return <UserInput parentCallback={this.handleCallback} />;
//   }
// }
function Display(props) {
  const [state, setState] = useState({ data: null });

  const handleCallback = (childData) => {
    setState({ data: childData });
  };
  const isFinished = props.isFinished;
  if (isFinished) {
    return <PreviewCV toChild={state.data} />;
  }
  return <UserInput parentCallback={handleCallback} />;
}

export default Display;
