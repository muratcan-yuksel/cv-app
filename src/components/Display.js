// import React, { Component } from "react";
import React, { useState } from "react";
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
//this does not work, we're gonna need to use useEffect I suppose
function Display(props) {
  const [state, setState] = useState({ data: null });

  const handleCallback = (childData) => {
    setState({ data: childData });
  };
  const isFinished = props.isFinished;
  if (isFinished) {
    return <PreviewCV toChild={state} />;
  }
  return <UserInput parentCallback={handleCallback} />;
}

export default Display;
