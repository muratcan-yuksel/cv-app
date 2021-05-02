import React, { Component } from "react";
import Work from "./Work";
import Informatsion from "./Informatsion";
import Studies from "./Studies";

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
    return <h1>Previewing your CV {data}</h1>;
  }
}
//this one will be the form
class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = { name: null };
  }
  onTrigger = (event) => {
    this.props.parentCallback(
      <div>
        <h1>{this.state.name}</h1>
        <p>yo man</p>
      </div>
    );
    event.preventDefault();
  };
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  personal = () => (
    <section id="information">
      <h1>Personal Information</h1>
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleName}
          placeholder="Name"
          required
        />
        <input type="text" placeholder="Last name" required />
      </div>
      <div>
        <input type="email" placeholder="e.g. something@someone.com" required />
      </div>
      <div>
        <input type="tel" placeholder="Phone number" />
      </div>
      <div>
        <input type="text" placeholder="Your LinkedIn here" required />
      </div>
      <div>
        <input type="text" placeholder="Your GitHub here" required />
      </div>
      <div>
        <textarea placeholder="Talk about yourself a bit" />
      </div>
    </section>
  );

  render() {
    return (
      <form onChange={this.onTrigger}>
        <this.personal />
        <section id="experience">
          <h1>Experience</h1>
          <div>
            <input type="text" placeholder="Your position here" />
          </div>
          <div>
            <input type="text" placeholder="Company name here" />
          </div>
          <div>
            <input type="text" placeholder="Job description(Optional)" />
          </div>
          <div>
            <label>Start date</label>
            <input type="date"></input>
          </div>
          <div>
            <label>End date</label>
            <input type="date"></input>
          </div>
        </section>
        <section id="studies">
          <h1>Education</h1>
          <div>
            <input type="text" placeholder="School name here" />
          </div>
          <div>
            <input type="text" placeholder="Study area" />
          </div>
          <div>
            <label>Start date</label>
            <input type="date"></input>
          </div>
          <div>
            <label>End date</label>
            <input type="date"></input>
          </div>
        </section>
      </form>
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
