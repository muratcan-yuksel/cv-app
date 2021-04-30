import React, { Component } from "react";

class Informatsion extends Component {
  render() {
    return (
      <form>
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
      </form>
    );
  }
}

export default Informatsion;
