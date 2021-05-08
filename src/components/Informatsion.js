import React from "react";
import "../styles/UserInput.css";

function Informatsion(props) {
  return props.information.map((item, index) => {
    let firstNameId = `firstName ${index}`,
      lastNameId = `lastName ${index}`,
      emailId = `email ${index}`,
      telId = `tel ${index}`,
      linkedinId = `linkedin ${index}`,
      githubId = `github ${index}`,
      bioId = `${index}`;

    return (
      <div className="information" key={index}>
        <h1>Personal Information</h1>
        <div id="firstName">
          <label htmlFor={firstNameId}>First Name</label>
          <input
            type="text"
            name={firstNameId}
            data-id={index}
            id={firstNameId}
            defaultValue={props.information[index].firstName}
            className="firstName"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label htmlFor={lastNameId}>Last Name</label>
          <input
            type="text"
            name={lastNameId}
            data-id={index}
            id={lastNameId}
            defaultValue={props.information[index].lastName}
            className="lastName"
            placeholder="Last name"
            required
          />
        </div>
        <div>
          <label htmlFor={emailId}>Email</label>
          <input
            name={emailId}
            data-id={index}
            id={emailId}
            defaultValue={props.information[index].email}
            className="email"
            type="email"
            placeholder="e.g. something@someone.com"
            required
          />
        </div>
        <div>
          <label htmlFor={telId}>Phone Number</label>
          <input
            type="tel"
            name={telId}
            data-id={index}
            id={telId}
            defaultValue={props.information[index].tel}
            className="tel"
            placeholder="Phone number"
          />
        </div>
        <div>
          <label htmlFor={linkedinId}>LinkedIn</label>
          <input
            type="text"
            name={linkedinId}
            data-id={index}
            id={linkedinId}
            defaultValue={props.information[index].linkedin}
            className="linkedin"
            placeholder="Your LinkedIn here"
          />
        </div>
        <div>
          <label htmlFor={githubId}>GitHub</label>
          <input
            type="text"
            name={githubId}
            data-id={index}
            id={githubId}
            defaultValue={props.information[index].github}
            className="github"
            placeholder="Your GitHub here"
          />
        </div>
        <div>
          <label htmlFor={bioId}>Bio</label>
          <textarea
            name={bioId}
            data-id={index}
            id={bioId}
            defaultValue={props.information[index].bio}
            className="bio"
            placeholder="Talk about yourself a bit"
          />
        </div>
        <div className="space"></div>
      </div>
    );
  });
}

export default Informatsion;
