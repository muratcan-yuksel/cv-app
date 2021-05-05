import React, { Component } from "react";

class Informatsion extends Component {
  render() {
    return (
      <div>
        <h1>Personal Information</h1>
        <div>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>

          <input
            name="email"
            id="email"
            type="email"
            placeholder="e.g. something@someone.com"
            required
          />
        </div>
        <div>
          <label htmlFor="tel">Phone Number</label>

          <input type="tel" name="tel" id="tel" placeholder="Phone number" />
        </div>
        <div>
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            placeholder="Your LinkedIn here"
            required
          />
        </div>
        <div>
          <label htmlFor="github">GitHub</label>
          <input
            type="text"
            name="github"
            id="github"
            placeholder="Your GitHub here"
            required
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            id="bio"
            placeholder="Talk about yourself a bit"
          />
        </div>
      </div>
    );
  }
}

export default Informatsion;
