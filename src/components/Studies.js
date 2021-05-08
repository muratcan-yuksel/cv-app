import React from "react";
import "../styles/UserInput.css";

function Studies(props) {
  return props.studies.map((item, index) => {
    let schoolNameId = `School Name No ${index}`,
      studyAreaId = `Study Area No ${index}`,
      schoolStartDateId = `School start date no ${index}`,
      schoolEndDateId = `School end date ${index}`;

    return (
      <div key={index}>
        <div>
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
          <input
            type="date"
            name={schoolEndDateId}
            data-id={index}
            id={schoolEndDateId}
            defaultValue={props.studies[index].schoolEndDate}
            className="schoolEndDate"
          ></input>
        </div>
        <div className="space"></div>
      </div>
    );
  });
}

export default Studies;
