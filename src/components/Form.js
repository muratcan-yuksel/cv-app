import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <section id="information">
          <h1>Personal Information</h1>
          <div>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <div>
            <input
              type="email"
              placeholder="e.g. something@someone.com"
              required
            />
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

export default Form;
