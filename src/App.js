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
      addEducation: false,
      studyId: [],
      wegoagain: "no",
    };
    this.editThings = this.editThings.bind(this);
    this.addMore = this.addMore.bind(this);
    this.deepCopy = this.deepCopy.bind(this);
  }

  getDataInfo = function (datareceived) {
    const currentarray = this.state.info;
    this.setState({
      info: currentarray.concat(datareceived),
      renderInfo: false,
    });
  };

  getDataEducation = function (datareceived) {
    const receivedarray = datareceived;
    receivedarray.forEach((element) => {
      const savedelement = Array.from(element);
      const currentid = element.pop();
      this.setState(
        {
          education: this.state.education.concat([savedelement]),
          shortenedEducation: this.state.shortenedEducation.concat([element]),
          studyId: this.state.studyId.concat(currentid),
          renderEducation: false,
          editEducation: false,
          addEducation: false,
          oldeducation: this.state.oldeducation,
        },
        () => {}
      );
    });
  };
  deepCopy = function (arr) {
    let copy = [];
    arr.forEach((elem) => {
      if (Array.isArray(elem)) {
        copy.push(this.deepCopy(elem));
      } else {
        copy.push(elem);
      }
    });
    return copy;
  };

  //depois do primeiro edit corta o ultimo elemento ?

  //na segunda vez que faço edit os arrays so têm 4 elementos
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
      const buttonData = event.target.dataset.specific;
      const totaleducation = this.state.education;
      const targetedEducation = totaleducation
        .filter((array) => array.includes(buttonData))
        .flat();
      const remainingEducation = totaleducation.filter(
        (array) => !array.includes(buttonData)
      );
      const shortenedRemainingEducation = this.deepCopy(remainingEducation);
      shortenedRemainingEducation.forEach((array) =>
        array.length === 5 ? array.pop() : array
      );
      this.setState(
        {
          renderEducation: true,
          oldeducation: targetedEducation,
          editEducation: true,
          education: remainingEducation,
          shortenedEducation: shortenedRemainingEducation,
          wegoagain: "yes",
        },
        () => {
          console.log("currebt education");
          console.log(this.state.education);
          console.log("targetedEducation");
          console.log(targetedEducation);
          console.log("old education");
          console.log(this.state.oldeducation);
        }
      );
    } else {
    }
  };

  //continuo sem saber o que é que esta a acontecer. depois de editar um elemento, quando clicko em edit outra vez o elemento vem sem id. nao é no getdata que isso esta a acontecer, nem no editthings. se calhar tenho de fazer debug a partir do primeiro edit e nao do segundo

  addMore = function (event) {
    this.setState({
      addEducation: true,
      editEducation: false,
      renderEducation: true,
    });
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
        {/* {this.state.info.length !== 0 ? ( */}
        {/*   <Display collected={this.state.info} edit={this.editThings} /> */}
        {/* ) : null} */}
        <h3>Education</h3>

        {/* {this.state.renderEducation && */}
        {/* !this.state.addEducation && */}
        {/* !this.state.editEducation ? ( */}
        {/*   <Education sendInfo={this.getDataEducation} /> */}
        {/* ) : null} */}

        <Education
          sendInfo={this.getDataEducation}
          sendEducation={this.state.oldeducation}
          weGoAgain={this.state.wegoagain}
        />

        {/* {this.state.renderEducation && */}
        {/* !this.state.addEducation && */}
        {/* this.state.editEducation ? ( */}
        {/*   <Education */}
        {/*     sendInfo={this.getDataEducation} */}
        {/*     sendEducation={this.state.oldeducation} */}
        {/*     weGoAgain="yes" */}
        {/*   /> */}
        {/* ) : null} */}

        {/* {this.state.renderEducation && */}
        {/* this.state.addEducation && */}
        {/* !this.state.editEducation ? ( */}
        {/*   <Education sendInfo={this.getDataEducation} /> */}
        {/* ) : null} */}

        {/* {this.state.renderEducation && */}
        {/* this.state.addEducation && */}
        {/* this.state.editEducation ? ( */}
        {/*   <Education */}
        {/*     sendInfo={this.getDataEducation} */}
        {/*     sendEducation={this.state.oldeducation} */}
        {/*     weGoAgain="yes" */}
        {/*   /> */}
        {/* ) : null} */}

        {/* {this.state.education.length !== 0 ? ( */}
        {/*   <Display */}
        {/*     collected={this.state.education} */}
        {/*     edit={this.editThings} */}
        {/*     add={this.addMore} */}
        {/*     divID={this.state.studyId} */}
        {/*   /> */}
        {/* ) : null} */}

        {this.state.education.length !== 0 ? (
          <Display
            collected={this.state.shortenedEducation}
            edit={this.editThings}
            add={this.addMore}
            divID={this.state.studyId}
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
