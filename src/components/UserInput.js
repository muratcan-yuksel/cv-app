// import React, { Component } from "react";
import React, { useState } from "react";
import Informatsion from "./Informatsion";
import Work from "./Work";
import Studies from "./Studies";
import "../styles/UserInput.css";

function UserInput(props) {
  const [state, setState] = useState({
    information: [
      {
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        linkedin: "",
        github: "",
        bio: "",
      },
    ],
    work: [
      {
        position: "",
        company: "",
        jobDescription: "",
        startDate: "",
        endDate: "",
      },
    ],
    studies: [
      {
        schoolName: "",
        studyArea: "",
        schoolStartDate: "",
        schoolEndDate: "",
      },
    ],
  });

  const handleChange = (e) => {
    if (
      [
        "position",
        "company",
        "jobDescription",
        "startDate",
        "endDate",
      ].includes(e.target.className)
    ) {
      let work = [...state.work];
      work[e.target.dataset.id][e.target.className] = e.target.value;
      setState({ work });
    } else if (
      ["schoolName", "studyArea", "schoolStartDate", "schoolEndDate"].includes(
        e.target.className
      )
    ) {
      let studies = [...state.studies];
      studies[e.target.dataset.id][e.target.className] = e.target.value;
      setState({ studies });
    } else if (
      [
        "firstName",
        "lastName",
        "email",
        "tel",
        "linkedin",
        "github",
        "bio",
      ].includes(e.target.className)
    ) {
      let information = [...state.information];
      information[e.target.dataset.id][e.target.className] = e.target.value;
      setState({ information });
    } else {
      setState({ [e.target.name]: e.target.value });
    }
  };
  const addWork = (e) => {
    setState([
      ...state.work,
      {
        position: "",
        company: "",
        jobDescription: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };
  //   addWork = (e) => {
  //     this.setState((prevState) => ({
  //       work: [
  //         ...prevState.work,
  //         {
  //           position: "",
  //           company: "",
  //           jobDescription: "",
  //           startDate: "",
  //           endDate: "",
  //         },
  //       ],
  //     }));
  //   };

  const addStudies = (e) => {
    setState([
      ...state.studies,
      {
        schoolName: "",
        studyArea: "",
        schoolStartDate: "",
        schoolEndDate: "",
      },
    ]);
  };
  const onTrigger = (event) => {
    props.parentCallback(state);
  };
  const twoCalls = (e) => {
    onTrigger(e);
    handleChange(e);
    // console.log(this.state);
  };
  let { work } = state;
  let { studies } = state;
  let { information } = state;
  return (
    <div className="input" onChange={twoCalls}>
      <div id="header">CV-maker</div>
      <Informatsion information={information} />
      <h1>Experience</h1>
      <Work work={work} />
      <button className="button" onClick={addWork}>
        Add work experience
      </button>

      <h1>Education</h1>
      <Studies studies={studies} />
      <button className="button" onClick={addStudies}>
        Add education
      </button>
    </div>
  );
}

// class UserInput extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       information: [
//         {
//           firstName: "",
//           lastName: "",
//           email: "",
//           tel: "",
//           linkedin: "",
//           github: "",
//           bio: "",
//         },
//       ],
//       work: [
//         {
//           position: "",
//           company: "",
//           jobDescription: "",
//           startDate: "",
//           endDate: "",
//         },
//       ],
//       studies: [
//         {
//           schoolName: "",
//           studyArea: "",
//           schoolStartDate: "",
//           schoolEndDate: "",
//         },
//       ],
//     };
//   }

//   handleChange = (e) => {
//     if (
//       [
//         "position",
//         "company",
//         "jobDescription",
//         "startDate",
//         "endDate",
//       ].includes(e.target.className)
//     ) {
//       let work = [...this.state.work];
//       work[e.target.dataset.id][e.target.className] = e.target.value;
//       this.setState({ work });
//     } else if (
//       ["schoolName", "studyArea", "schoolStartDate", "schoolEndDate"].includes(
//         e.target.className
//       )
//     ) {
//       let studies = [...this.state.studies];
//       studies[e.target.dataset.id][e.target.className] = e.target.value;
//       this.setState({ studies });
//     } else if (
//       [
//         "firstName",
//         "lastName",
//         "email",
//         "tel",
//         "linkedin",
//         "github",
//         "bio",
//       ].includes(e.target.className)
//     ) {
//       let information = [...this.state.information];
//       information[e.target.dataset.id][e.target.className] = e.target.value;
//       this.setState({ information });
//     } else {
//       this.setState({ [e.target.name]: e.target.value });
//     }
//   };

//   addWork = (e) => {
//     this.setState((prevState) => ({
//       work: [
//         ...prevState.work,
//         {
//           position: "",
//           company: "",
//           jobDescription: "",
//           startDate: "",
//           endDate: "",
//         },
//       ],
//     }));
//   };
//   addStudies = (e) => {
//     this.setState((prevState) => ({
//       studies: [
//         ...prevState.studies,
//         {
//           schoolName: "",
//           studyArea: "",
//           schoolStartDate: "",
//           schoolEndDate: "",
//         },
//       ],
//     }));
//   };
//   onTrigger = (event) => {
//     this.props.parentCallback(this.state);
//   };
//   twoCalls = (e) => {
//     this.onTrigger(e);
//     this.handleChange(e);
//     // console.log(this.state);
//   };

//   render() {
//     let { work } = this.state;
//     let { studies } = this.state;
//     let { information } = this.state;
//     return (
//       <div className="input" onChange={this.twoCalls}>
//         <div id="header">CV-maker</div>
//         <Informatsion information={information} />
//         <h1>Experience</h1>
//         <Work work={work} />
//         <button className="button" onClick={this.addWork}>
//           Add work experience
//         </button>

//         <h1>Education</h1>
//         <Studies studies={studies} />
//         <button className="button" onClick={this.addStudies}>
//           Add education
//         </button>
//       </div>
//     );
//   }
// }

export default UserInput;
