import React from "react";
import "../styles/UserInput.css";

const Work = (props) => {
  return props.work.map((item, index) => {
    let positionId = `position-${index}`,
      companyId = `company-${index}`,
      jobDescriptionId = `jobDescription-${index}`,
      startDateId = `startDate-${index}`,
      endDateId = `endDate-${index}`;

    return (
      <div key={index}>
        <div>
          <input
            type="text"
            name={positionId}
            data-id={index}
            id={positionId}
            defaultValue={props.work[index].position}
            className="position"
            placeholder="Your position here"
          />
        </div>
        <div>
          <input
            type="text"
            name={companyId}
            data-id={index}
            id={companyId}
            defaultValue={props.work[index].company}
            className="company"
            placeholder="Company name here"
          />
        </div>
        <div>
          <input
            type="text"
            name={jobDescriptionId}
            data-id={index}
            id={jobDescriptionId}
            defaultValue={props.work[index].jobDescription}
            className="jobDescription"
            placeholder="Job description(Optional)"
          />
        </div>
        <div>
          <input
            name={startDateId}
            data-id={index}
            id={startDateId}
            defaultValue={props.work[index].startDate}
            className="startDate"
            type="date"
          ></input>
        </div>
        <div>
          <input
            name={endDateId}
            data-id={index}
            id={endDateId}
            defaultValue={props.work[index].endDate}
            className="endDate"
            type="date"
          ></input>
        </div>
        <div className="space"></div>
      </div>
    );
  });
};

export default Work;
