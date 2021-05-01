import React, { Component } from "react";
import Work from "./Work";
import Informatsion from "./Informatsion";
import Studies from "./Studies";

//this one will be the html elements
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
//this one will be the form
function GuestGreeting(props) {
  return <h1>Please sign up</h1>;
}
function Greeting(props) {
  const isFinished = props.isFinished;
  if (isFinished) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}
function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isFinished: false };
  }
  handleLoginClick() {
    this.setState({ isFinished: true });
  }
  handleLogoutClick() {
    this.setState({ isFinished: false });
  }
  render() {
    const isFinished = this.state.isFinished;
    let button;
    if (isFinished) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isFinished={isFinished} />
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
