import React from "react";
import Display from "./components/Display.js";
import DisplayInfo from "./components/DisplayInfo.js";
import DisplayExp from "./components/DisplayExp.js";
import Education from "./components/Education.js";
import Experience from "./components/Experience.js";
import Info from "./components/Info.js";
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
    };
    this.getit = this.getit.bind(this);
    this.addMore = this.addMore.bind(this);
    this.edit = this.edit.bind(this);
  }

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

    const currentarray = Array.from(arrayreceived);
    const currentID = [{ id: uniqid() }];
    const mergeArrayId = currentarray.concat(currentID);
    this.setState(
      {
        [sourcereceived]: this.state[sourcereceived].concat(mergeArrayId),
        [sourcetorender]: false,
      },
      () => {
        this.setState({
          [source]: this.state[source].concat([this.state[sourcereceived]]),
          [sourcetoedit]: {},
        });
      }
    );
  };

  addMore = function (event) {
    let sourcetorender;
    let sourcereceived;
    if (event.target.className === "educationadd") {
      sourcetorender = "renderEducation";
      sourcereceived = "studyreceived";
    } else {
      sourcetorender = "renderExp";
      sourcereceived = "expreceived";
    }

    this.setState({
      [sourcetorender]: true,
      [sourcereceived]: [],
    });
  };

  edit = function (event) {
    let source;
    let sourcetorender;
    let sourcetoedit;
    let sourcereceived;

    if (event.target.className === "editinfo") {
      source = "infocollection";
      sourcetorender = "renderInformation";
      sourcetoedit = "infoToEdit";
      sourcereceived = "inforeceived";
    } else if (event.target.className === "editeducation") {
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
    const buttonID = event.target.id;
    const collection = Array.from(this.state[source]);
    let targetedSectionIndex;

    collection.forEach(function (array, index) {
      array.filter((element) => {
        if (element.id === buttonID) {
          targetedSectionIndex = index;
        }
        return element.id === buttonID;
      });
    });

    const extractObject = collection[targetedSectionIndex];
    // send info to education

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

  render() {
    // education
    let checkToRenderEd;
    let addMoreButtonEd;
    let checkToDisplayEd;
    if (this.state.renderEducation) {
      checkToRenderEd = (
        <Education getText={this.getit} toedit={this.state.educationToEdit} />
      );
    } else {
      addMoreButtonEd = (
        <button onClick={this.addMore} className="educationadd">
          Add More
        </button>
      );
    }
    if (this.state.educationcollection.length !== 0) {
      checkToDisplayEd = (
        <Display
          textToDisplay={this.state.educationcollection}
          editingButton={this.edit}
        />
      );
    }

    // info
    let checkToRenderInfo;
    let checkToDisplayInfo;

    if (this.state.renderInformation) {
      checkToRenderInfo = (
        <Info getText={this.getit} toedit={this.state.infoToEdit} />
      );
    }

    if (this.state.infocollection.length !== 0) {
      checkToDisplayInfo = (
        <DisplayInfo
          textToDisplay={this.state.infocollection}
          editingButton={this.edit}
        />
      );
    }

    // experience
    let checkToRenderExp;
    let addMoreButtonExp;
    let checkToDisplayExp;
    if (this.state.renderExp) {
      checkToRenderExp = (
        <Experience getText={this.getit} toedit={this.state.expToEdit} />
      );
    } else {
      addMoreButtonExp = (
        <button onClick={this.addMore} className="experienceadd">
          Add More
        </button>
      );
    }
    if (this.state.experiencecollection.length !== 0) {
      checkToDisplayExp = (
        <DisplayExp
          textToDisplay={this.state.experiencecollection}
          editingButton={this.edit}
        />
      );
    }

    return (
      <div>
        <div>
          <h1>Info</h1>
          {checkToRenderInfo}
          {checkToDisplayInfo}
        </div>
        <div>
          <h1>Education</h1>
          {checkToRenderEd}
          {checkToDisplayEd}
          {addMoreButtonEd}
        </div>
        <div>
          <h1>Work Experience</h1>
          {checkToRenderExp}
          {checkToDisplayExp}
          {addMoreButtonExp}
        </div>
      </div>
    );
  }
}

export default App;

//nao sei se gosto muito de como isto esta mas pronto
// falta fazer funcoes de delete e de apagar
//botao de enviar tudo no fim
//styling
// se calhar posso tentar inventar e fazer upload de uma foto
// mudar o nome do display
