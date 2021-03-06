// import React, { Component } from "react";
import React, { useState } from "react";
import jsPDF from "jspdf";
import "../styles/PreviewCV.css";

function PreviewCV(props) {
  const [data, setData] = useState(props.toChild);
  const generatePDF = () => {
    let doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
  };
  //information as object
  const infoObj = data.information[0];
  //work as array
  const workArr = data.work;
  //studies array
  const studiesArr = data.studies;
  console.log(workArr);
  console.log(data);
  return (
    <div>
      <div id="content">
        <h3>Personal Information</h3>
        <section className="previews">
          {Object.keys(infoObj).map((key, index) => (
            <p key={index}>{infoObj[key]}</p>
          ))}
          <div className="space"></div>
        </section>
        <h3>Experience</h3>
        <section className="previews">
          {workArr.map((item) =>
            Object.keys(item).map((key, index) => (
              <p key={index}>{item[key]}</p>
            ))
          )}
          <div className="space"></div>
        </section>
        <section>
          <h3>Studies</h3>
          {studiesArr.map((item) =>
            Object.keys(item).map((key, index) => (
              <p key={index}>{item[key]}</p>
            ))
          )}
          <div className="space"></div>
        </section>
      </div>
      <button id="generate" onClick={generatePDF} type="primary">
        Generate PDF
      </button>
    </div>
  );
}

// class PreviewCV extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: this.props.toChild,
//     };
//   }
//   generatePDF = () => {
//     let doc = new jsPDF("p", "pt", "a4");
//     doc.html(document.querySelector("#content"), {
//       callback: function (pdf) {
//         pdf.save("mypdf.pdf");
//       },
//     });
//   };

//   render() {
//     const { data } = this.state;
//     //information as object
//     const infoObj = data.information[0];
//     //work as array
//     const workArr = data.work;
//     //studies array
//     const studiesArr = data.studies;
//     console.log(workArr);
//     console.log(data);
//     return (
//       <div>
//         <div id="content">
//           <h3>Personal Information</h3>
//           <section className="previews">
//             {Object.keys(infoObj).map((key, index) => (
//               <p key={index}>{infoObj[key]}</p>
//             ))}
//             <div className="space"></div>
//           </section>
//           <h3>Experience</h3>
//           <section className="previews">
//             {workArr.map((item) =>
//               Object.keys(item).map((key, index) => (
//                 <p key={index}>{item[key]}</p>
//               ))
//             )}
//             <div className="space"></div>
//           </section>
//           <section>
//             <h3>Studies</h3>
//             {studiesArr.map((item) =>
//               Object.keys(item).map((key, index) => (
//                 <p key={index}>{item[key]}</p>
//               ))
//             )}
//             <div className="space"></div>
//           </section>
//         </div>
//         <button id="generate" onClick={this.generatePDF} type="primary">
//           Generate PDF
//         </button>
//       </div>
//     );
//   }
// }
export default PreviewCV;
