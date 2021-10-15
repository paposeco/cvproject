import React from "react";
import DisplayEdu from "./components/DisplayEdu.js";
import DisplayInfo from "./components/DisplayInfo.js";
import DisplayExp from "./components/DisplayExp.js";
import Education from "./components/Education.js";
import Experience from "./components/Experience.js";
import Info from "./components/Info.js";
import UploadPhoto from "./components/ProfilePhoto.js";
import RenderPhoto from "./components/RenderPhoto.js";
import logo from "./images/logo.png";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //education
      studyreceived: [],
      educationcollection: [],
      renderEducation: true,
      educationToEdit: {},
      //info
      inforeceived: [],
      infocollection: [],
      renderInformation: true,
      infoToEdit: {},
      //experience
      expreceived: [],
      experiencecollection: [],
      renderExp: true,
      expToEdit: {},
      //photo
      urlsubmitted: "",
    };
    this.getit = this.getit.bind(this);
    this.addMore = this.addMore.bind(this);
    this.edit = this.edit.bind(this);
    this.deleteit = this.deleteit.bind(this);
    this.submitcv = this.submitcv.bind(this);
    this.submitphoto = this.submitphoto.bind(this);
    this.cancel = this.cancel.bind(this);
    this.showOrHide = this.showOrHide.bind(this);
  }

  // collects information from the forms in each cv section
  getit = function (arrayreceived) {
    let source;
    let sourcetoedit;
    let sourcereceived;
    let sourcetorender;

    const firstObject = arrayreceived[0];
    if (firstObject.alias === "username") {
      source = "infocollection";
      sourcetoedit = "infoToEdit";
      sourcereceived = "inforeceived";
      sourcetorender = "renderInformation";
    } else if (firstObject.alias === "schoolname") {
      source = "educationcollection";
      sourcetoedit = "educationToEdit";
      sourcereceived = "studyreceived";
      sourcetorender = "renderEducation";
    } else {
      source = "experiencecollection";
      sourcetoedit = "expToEdit";
      sourcereceived = "expreceived";
      sourcetorender = "renderExp";
    }

    //sets the state for the information received
    const currentarray = Array.from(arrayreceived);
    const currentID = [{ id: uniqid() }];
    const mergeArrayId = currentarray.concat(currentID);
    this.setState(
      {
        //adds the id to the collected data array before setting state
        [sourcereceived]: this.state[sourcereceived].concat(mergeArrayId),
        //changes render form to false
        [sourcetorender]: false,
      },
      () => {
        // after the collected data+id is set in sourcereceived, adds that array to the section collection of arrays; education and experience might have more than one block of information which is stored in said collection
        this.setState({
          [source]: this.state[source].concat([this.state[sourcereceived]]),
          [sourcetoedit]: {},
        });
      }
    );
  };

  // offers the user the possibility to add more blocks to education or experience
  addMore = function (event) {
    let sourcetorender;
    let sourcereceived;
    if (event.target.dataset.buttonname === "educationadd") {
      sourcetorender = "renderEducation";
      sourcereceived = "studyreceived";
    } else {
      sourcetorender = "renderExp";
      sourcereceived = "expreceived";
    }

    //renders the form by set the state to true, and clears the previous data received with getit
    this.setState({
      [sourcetorender]: true,
      [sourcereceived]: [],
    });
  };

  // edits submitted information
  edit = function (event) {
    let source;
    let sourcetorender;
    let sourcetoedit;
    let sourcereceived;

    if (event.target.dataset.buttonname === "editinfo") {
      source = "infocollection";
      sourcetorender = "renderInformation";
      sourcetoedit = "infoToEdit";
      sourcereceived = "inforeceived";
    } else if (event.target.dataset.buttonname === "editeducation") {
      source = "educationcollection";
      sourcetorender = "renderEducation";
      sourcetoedit = "educationToEdit";
      sourcereceived = "studyreceived";
    } else {
      source = "experiencecollection";
      sourcetorender = "renderExp";
      sourcetoedit = "expToEdit";
      sourcereceived = "expreceived";
    }

    // determines the id of the block of information being edited and corresponding index on block collection
    const buttonID = event.target.id;
    const elementID = buttonID.replace("Edit", "");
    const collection = Array.from(this.state[source]);
    let targetedSectionIndex;

    collection.forEach(function (array, index) {
      array.filter((element) => {
        if (element.id === elementID) {
          targetedSectionIndex = index;
        }
        return element.id === elementID;
      });
    });

    // gets the block object with the index determined previously
    const extractObject = collection[targetedSectionIndex];

    // sets state of object to be edited, which will be used by the component in charge of the form; render the form and clear previous data received
    this.setState({
      [sourcetoedit]: extractObject,
      [sourcetorender]: true,
      [sourcereceived]: [],
    });

    // remove target from collection

    collection.splice(targetedSectionIndex, 1);
    this.setState({
      [source]: collection,
    });
  };

  // determines the id and index on collection of block to be deleted and removes it from collection; if the click came from the photo element, resets the url
  deleteit = function (event) {
    if (event.target.dataset.buttonname === "deletephoto") {
      this.setState({
        urlsubmitted: "",
      });
      return;
    }
    let source;
    if (event.target.dataset.buttonname === "deleteeducation") {
      source = "educationcollection";
    } else {
      source = "experiencecollection";
    }
    const buttonID = event.target.id;
    const elementID = buttonID.replace("Delete", "");
    const collection = Array.from(this.state[source]);
    let targetedSectionIndex;

    collection.forEach(function (array, index) {
      array.filter((element) => {
        if (element.id === elementID) {
          targetedSectionIndex = index;
        }
        return element.id === elementID;
      });
    });

    collection.splice(targetedSectionIndex, 1);
    this.setState({
      [source]: collection,
    });
  };

  submitcv = function (event) {
    alert("Your CV has been submitted!");
  };

  submitphoto = function (url) {
    this.setState({
      urlsubmitted: url,
    });
  };

  // gives the user the option to cancel adding more blocks on a section by setting the sate of render form to false
  cancel = function (event) {
    let sourcetorender;
    let source;
    if (event.target.dataset.buttonname === "canceleducation") {
      sourcetorender = "renderEducation";
      source = "educationcollection";
    } else {
      sourcetorender = "renderExp";
      source = "experiencecollection";
    }
    if (this.state[source].length !== 0) {
      this.setState({
        [sourcetorender]: false,
      });
    }
  };

  // only shows the cancel option if there are elements on the collection by changing the button class; class "hide" hides button
  showOrHide = function (block) {
    const blockname = block + "collection";
    if (this.state[blockname].length !== 0) {
      return "cancel" + block;
    } else {
      return "hide";
    }
  };

  render() {
    // checks if user has submitted blocks for each section
    const eduCollected =
      this.state.educationcollection.length !== 0 ? true : false;
    const infoCollected = this.state.infocollection.length !== 0 ? true : false;
    const expCollected =
      this.state.experiencecollection.length !== 0 ? true : false;

    // determines class to be sent for rendering the cancel button
    const statusEdu = this.showOrHide("education");
    const statusExp = this.showOrHide("experience");
    return (
      <div>
        <div id="header">
          <div>
            <h1>CV Submission form</h1>
            <p>Required fields are marked with a *.</p>
          </div>
          <div id="logodiv">
            <p className="rotate">Some Company</p>
            <img src={logo} alt="companylogo" />
          </div>
        </div>
        <div className="cvblock">
          <h2>Info</h2>
          <div id="infosubdiv">
            {/* calls info component with function getit and an object to edit which might be empty if nothing is being edited */}
            {this.state.renderInformation && (
              <Info getText={this.getit} toedit={this.state.infoToEdit} />
            )}

            {/* calls component to display info collected (if it has been collected); send the info collected and function to edit block */}
            {infoCollected && (
              <DisplayInfo
                textToDisplay={this.state.infocollection}
                editingButton={this.edit}
              />
            )}
            {/* component to upload url is rendered while user hasn't submitted url; once it has submitted a url, displays img acompanied by a delete button */}
            {this.state.urlsubmitted === "" ? (
              <UploadPhoto submitphoto={this.submitphoto} />
            ) : (
              <RenderPhoto
                submittedphoto={this.state.urlsubmitted}
                deletephoto={this.deleteit}
              />
            )}
          </div>
        </div>

        {/* same thing as explained before but for education and experience */}
        <div className="cvblock">
          <h2>Education</h2>
          <div>
            {this.state.renderEducation ? (
              <Education
                getText={this.getit}
                toedit={this.state.educationToEdit}
                cancelButton={this.cancel}
                showOrHide={statusEdu}
              />
            ) : (
              <button
                onClick={this.addMore}
                className="educationadd"
                title="Add More"
                data-buttonname="educationadd"
              >
                <i
                  className="las la-plus"
                  onClick={this.addMore}
                  data-buttonname="educationadd"
                ></i>
              </button>
            )}
          </div>
          {eduCollected && (
            <DisplayEdu
              textToDisplay={this.state.educationcollection}
              editingButton={this.edit}
              deleteButton={this.deleteit}
            />
          )}
        </div>

        <div className="cvblock">
          <h2>Work Experience</h2>
          <div>
            {this.state.renderExp ? (
              <Experience
                getText={this.getit}
                toedit={this.state.expToEdit}
                cancelButton={this.cancel}
                showOrHide={statusExp}
              />
            ) : (
              <button
                onClick={this.addMore}
                data-buttonname="experienceadd"
                className="experienceadd"
                title="Add More"
              >
                <i
                  className="las la-plus"
                  onClick={this.addMore}
                  data-buttonname="experienceadd"
                ></i>
              </button>
            )}
          </div>
          {expCollected && (
            <DisplayExp
              textToDisplay={this.state.experiencecollection}
              editingButton={this.edit}
              deleteButton={this.deleteit}
            />
          )}
        </div>

        {/* if info and education have been collected, renders a button to submit the cv since I didn't require the user to provide work experience  */}
        {infoCollected && eduCollected ? (
          <div className="cvblock submitcv">
            <button onClick={this.submitcv} id="submitbutton">
              Submit CV
            </button>
          </div>
        ) : null}

        <footer>
          <a href="https://github.com/paposeco/" alt="github">
            <span>
              <i className="lab la-github"></i>
            </span>
            Fabi
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
