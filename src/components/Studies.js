import React from "react";

function Studies(props) {
  return props.studies.map((item, index) => {
    let schoolNameId = `School Name No ${index}`,
      studyAreaId = `Study Area No ${index}`,
      schoolStartDateId = `School start date no ${index}`,
      schoolEndDateId = `School end date ${index}`;

    return (
      <div key={index}>
        <div>
          <label htmlFor={schoolNameId}>{`School Name #${index + 1}`}</label>
          <input
            type="text"
            name={schoolNameId}
            data-id={index}
            id={schoolNameId}
            defaultValue={props.studies[index].schoolName}
            className="schoolName"
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
            defaultValue={props.studies[index].studyArea}
            className="studyArea"
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
            defaultValue={props.studies[index].schoolStartDate}
            className="schoolStartDate"
          ></input>
        </div>
        <div>
          <label htmlFor={schoolEndDateId}>{`School end date #${
            index + 1
          }`}</label>
          <input
            type="date"
            name={schoolEndDateId}
            data-id={index}
            id={schoolEndDateId}
            defaultValue={props.studies[index].schoolEndDate}
            className="schoolEndDate"
          ></input>
        </div>
      </div>
    );
  });
}

export default Studies;
