import React from "react";

function Studies() {
  return props.studes.map((item, index) => {
    let schoolNameId = `School Name No ${index}`,
      studyAreaId = `Study Area No ${index}`,
      schoolStartDateId = `School start date no ${index}`,
      schoolEndDateId = `School end date ${index}`;

    return (
      <div key={index}>
        <h1>Education</h1>
        <div>
          <label htmlFor={schoolNameId}>{`School Name #${index + 1}`}</label>
          <input
            type="text"
            name={schoolNameId}
            data-id={index}
            id={schoolNameId}
            value={props.studies[index].schoolName}
            classname="schoolName"
            placeholder="School name here"
          />
        </div>
        <div>
          <label htmlFor={studyAreaId}>{`Study area #${index + 1}`}</label>

          <input
            type="text"
            name={studyAreaId}
            data-id={index}
            id={studyAreaId}
            value={props.studies[index].studyArea}
            classname="studyArea"
            placeholder="Study area"
          />
        </div>
        <div>
          <label htmlFor={schoolStartDateId}>{`School start date #${
            index + 1
          }`}</label>
          <input
            type="date"
            name={schoolStartDateId}
            data-id={index}
            id={schoolStartDateId}
            value={props.studies[index].schoolStartDate}
            classname="schoolStartDate"
          ></input>
        </div>
        <div>
        <label htmlFor={schoolEndDateId}>{`School end date #${
          <input type="date" name={schoolEndDateId}
            data-id={index}
            id={schoolEndDateId}
            value={props.studies[index].schoolEndDate}
            classname="schoolEndDate"></input>
        </div>
      </div>
    );
  });
}

export default Studies;
