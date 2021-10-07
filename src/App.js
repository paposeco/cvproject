//import "./styles/App.css";
import React from "react";
import Info from "./components/Info.js";
//import Education from "./components/Education.js";
//import Experience from "./components/Experience.js";
//import uniqid from "uniqid"; id: uniqid()
import Display from "./components/Display.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = {
      info: [],
      renderInfo: true,
      editInfo: false,
    };
    this.editThings = this.editThings.bind(this);
  }

  getData = function (datareceived) {
    const currentarray = this.state.info;
    this.setState({
      info: currentarray.concat(datareceived),
      renderInfo: false,
    });
  };

  editThings = function (event) {
    this.setState({
      renderInfo: true,
      editInfo: true,
    });
    //console.log(this.state.info);
  };

  render() {
    return (
      <div>
        <h1>CV</h1>
        <h2>Fill out every item on the forms.</h2>
        {/* show form only if data hasnt been retrieved yet */}
        {this.state.renderInfo && !this.state.editInfo ? (
          <Info sendInfo={this.getData} weGoAgain="no" />
        ) : null}
        {this.state.editInfo ? (
          <Info weGoAgain="yes" information={this.state.info} />
        ) : null}
        <Display collected={this.state.info} edit={this.editThings} />
        {/* <Display/> */}

        {/* <form id="education"> */}
        {/*   <label> */}
        {/*     School name: */}
        {/*     <input type="text" /> */}
        {/*   </label> */}
        {/*   <label> */}
        {/*     Study: */}
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
        {/* <Education alleducation={educationcollected} /> */}
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
