import React, { Component } from "react";
import UserInput from "./UserInput";
import jsPDF from "jspdf";

class PreviewCV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.toChild,
    };
  }
  generatePDF = () => {
    let doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
  };

  render() {
    const { data } = this.state;
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
          <div>
            <h3>Personal Information</h3>
            {Object.keys(infoObj).map((key, index) => (
              <p key={index}>{infoObj[key]}</p>
            ))}
          </div>
          <div>
            <h3>Experience</h3>
            {workArr.map((item) =>
              Object.keys(item).map((key, index) => (
                <p key={index}>{item[key]}</p>
              ))
            )}
          </div>
          <div>
            <h3>Studies</h3>
            {studiesArr.map((item) =>
              Object.keys(item).map((key, index) => (
                <p key={index}>{item[key]}</p>
              ))
            )}
          </div>
        </div>
        <button onClick={this.generatePDF} type="primary">
          Generate PDF
        </button>
      </div>
    );
  }
}
export default PreviewCV;
