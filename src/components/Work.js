import React from "react";

const Work = (props) => {
  return props.work.map((item, index) => {
    let positionId = `position-${index}`,
      companyId = `company-${index}`,
      jobDescriptionId = `jobDescription-${index}`,
      startDateId = `startDate-${index}`,
      endDateId = `endDate-${index}`;

    return (
      <div key={index}>
        <h1>Experience</h1>
        <div>
          <label htmlFor={positionId}>{`Position No ${index + 1}`}</label>
          <input
            type="text"
            name={positionId}
            data-id={index}
            id={positionId}
            value={props.work[index].position}
            className="position"
            placeholder="Your position here"
          />
        </div>
        <div>
          <label htmlFor={companyId}>{`Company No ${index + 1}`}</label>
          <input
            type="text"
            name={companyId}
            data-id={index}
            id={companyId}
            value={props.work[index].company}
            classname="company"
            placeholder="Company name here"
          />
        </div>
        <div>
          <label htmlFor={jobDescriptionId}>{`Job Description No ${
            index + 1
          }`}</label>
          <input
            type="text"
            name={jobDescriptionId}
            data-id={index}
            id={jobDescriptionId}
            value={props.work[index].jobDescription}
            classname="jobDescription"
            placeholder="Job description(Optional)"
          />
        </div>
        <div>
          <label htmlFor={startDateId}>{`Start Date No ${index + 1}`}</label>
          <input
            name={startDateId}
            data-id={index}
            id={startDateId}
            value={props.work[index].startDate}
            classname="startDate"
            type="date"
          ></input>
        </div>
        <div>
          <label htmlFor={endDateId}>{`End Date No ${index + 1}`}</label>
          <input
            name={endDateId}
            data-id={index}
            id={endDateId}
            value={props.work[index].endDate}
            classname="endDate"
            type="date"
          ></input>
        </div>
      </div>
    );
  });
};

export default Work;
