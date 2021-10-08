//import "./styles/App.css";
import React from "react";
import Info from "./components/Info.js";
import Education from "./components/Education.js";
//import Experience from "./components/Experience.js";
//import uniqid from "uniqid"; id: uniqid()
import Display from "./components/Display.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getDataInfo = this.getDataInfo.bind(this);
    this.getDataEducation = this.getDataEducation.bind(this);
    this.state = {
      info: [],
      renderInfo: true,
      editInfo: false,
      oldinfo: [],
      education: [],
      shortenedEducation: [],
      renderEducation: true,
      editEducation: false,
      oldeducation: [],
    };
    this.editThings = this.editThings.bind(this);
  }

  getDataInfo = function (datareceived) {
    const currentarray = this.state.info;
    this.setState({
      info: currentarray.concat(datareceived),
      renderInfo: false,
    });
  };

  getDataEducation = function (datareceived) {
    const currentarray = this.state.education;
    const receivedarray = Array.from(datareceived);
    receivedarray.pop();
    this.setState({
      education: currentarray.concat(datareceived),
      shortenedEducation: this.state.shortenedEducation.concat(receivedarray),
      renderEducation: false,
      // educationID: this.state.educationID.concat(datareceived.id),
    });
  };

  editThings = function (event) {
    const buttonid = event.target.id;
    if (buttonid === "info") {
      this.setState({
        renderInfo: true,
        oldinfo: this.state.oldinfo.concat(this.state.info),
        editInfo: true,
        info: [],
      });
    } else if (buttonid === "education") {
      this.setState({
        renderEducation: true,
        oldeducation: this.state.oldeducation.concat(this.state.education),
        editEducation: true,
        education: [],
        shortenedEducation: [],
      });
    } else {
    }
  };

  render() {
    return (
      <div>
        <h1>CV</h1>
        <h2>Fill out every item on the forms.</h2>
        <h3>Personal Information</h3>
        {/* show form only if data hasnt been retrieved yet */}
        {this.state.renderInfo && !this.state.editInfo ? (
          <Info sendInfo={this.getDataInfo} weGoAgain="no" />
        ) : null}
        {this.state.renderInfo && this.state.editInfo ? (
          <Info
            sendInfo={this.getDataInfo}
            information={this.state.oldinfo}
            weGoAgain="yes"
          />
        ) : null}
        {this.state.info.length !== 0 ? (
          <Display collected={this.state.info} edit={this.editThings} />
        ) : null}
        <h3>Education</h3>
        {this.state.renderEducation && !this.state.editEducation ? (
          <Education sendInfo={this.getDataEducation} weGoAgain="no" />
        ) : null}
        {this.state.renderEducation && this.state.editEducation ? (
          <Education
            sendInfo={this.getDataEducation}
            education={this.state.oldeducation}
            weGoAgain="yes"
          />
        ) : null}
        {this.state.education.length !== 0 ? (
          <Display
            collected={this.state.shortenedEducation}
            divID={this.state.education[this.state.education.length - 1]}
            edit={this.editThings}
          />
        ) : null}
        {/* if there are schools, show add button */}
        <h3>Work Experience</h3>
        {/* <form id="experience"> */}
        {/*   <label> */}
        {/*     Company name: */}
        {/*     <input type="text" /> */}
        {/*   </label> */}
        {/*   <label> */}
        {/*     Position title: */}
        {/*     <input type="text" /> */}
        {/*   </label> */}
        {/*   <label> */}
        {/*     Tasks: */}
        {/*     <input type="text" /> */}
        {/*   </label> */}
        {/*   <label> */}
        {/*     Dates: */}
        {/*     <input type="date" /> to{" "} */}
        {/*     <label> */}
        {/*       <input type="date" /> */}
        {/*     </label> */}
        {/*   </label> */}
        {/*   <input type="submit" value="Save" /> */}
        {/* </form> */}
        {/* <Experience allexperience={experiencecollected} /> */}
      </div>
    );
  }
}

export default App;
