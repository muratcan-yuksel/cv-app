// import React, { Component } from "react";
import React, { useState } from "react";
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

function App(props) {
  const [state, setState] = useState({ isFinished: false });
  const handlePreviewClick = () => {
    setState({ isFinished: true });
  };
  const handleEditClick = () => {
    setState({ isFinished: false });
  };
  let button;
  const isFinished = state.isFinished;
  if (isFinished) {
    button = <EditButton onClick={handleEditClick} />;
  } else {
    button = <PreviewButton onClick={handlePreviewClick} />;
  }
  return (
    <div>
      <Display isFinished={isFinished} />
      <div className="prevBtn">{button}</div>
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.handlePreviewClick = this.handlePreviewClick.bind(this);
//     this.handleEditClick = this.handleEditClick.bind(this);
//     this.state = { isFinished: false };
//   }
//   handlePreviewClick() {
//     this.setState({ isFinished: true });
//   }
//   handleEditClick() {
//     this.setState({ isFinished: false });
//   }
//   render() {
//     const isFinished = this.state.isFinished;
//     let button;
//     if (isFinished) {
//       button = <EditButton onClick={this.handleEditClick} />;
//     } else {
//       button = <PreviewButton onClick={this.handlePreviewClick} />;
//     }
//     return (
//       <div>
//         <Display isFinished={isFinished} />
//         <div className="prevBtn">{button}</div>
//       </div>
//     );
//   }
// }

export default App;

// import React from "react"
//this is a scrimba challenge that's similar to the one above,
//but written by me
//and shows those two functions at the start above were useless
// /*
// Challenge:

// Given a stateless functional component:
// 1. Follow the steps necessary to add state to it,
// 2. Have state keep track of whether the user is logged in or not
// 3. Add a button that logs the user in/out
//     a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
// 4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
// */

// class App extends React.Component{
//     constructor(props){
//         super(props)
//         this.state= {isLogged: false}
//         this.handleLogin= this.handleLogin.bind(this)
//         this.handleLogout= this.handleLogout.bind(this)
//     }
//     handleLogin(){
//         this.setState({isLogged:true})
//     }
//     handleLogout(){
//         this.setState({isLogged:false})
//     }

//     render(){
//         let button;
//         const isLogged= this.state.isLogged
//         if (isLogged){
//             button= <button onClick={this.handleLogout}>Logout </button>
//         }else{
//             button= <button onClick={this.handleLogin}>Login </button>

//         }
//   return(
//       <div>
//       {button}
//       </div>
//   )

//       }
//     }

// export default App

// this is his method and its ssuper cool

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoggedIn: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         this.setState(prevState => {
//             return {
//                 isLoggedIn: !prevState.isLoggedIn
//             }
//         })
//     }

//     render() {
//         let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
//         let displayText = this.state.isLoggedIn ? "Logged in" : "Logged o"
//         return (
//             <div>
//                 <button onClick={this.handleClick}>{buttonText}</button>
//             </div>
//         )
//     }
// }

// export default App
