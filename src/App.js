import "./styles/App.css";
import React from "react";
import Info from "./components/Info.js";
import Education from "./components/Education.js";
import Experience from "./components/Experience.js";
//import uniqid from "uniqid"; id: uniqid()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: "",
        email: "",
        telephone: "",
      },
      // education: {},
      // experience: {},
    };
    this.handlerOfChange = this.handlerOfChange.bind(this);
    this.handlerOfSubmit = this.handlerOfSubmit.bind(this);
  }

  handlerOfChange = function (event) {
    this.setState({
      info: {},
    });
  };

  handlerOfSubmit = function (event) {};

  render() {
    // const {
    //   infocollected,
    //   educationcollected,
    //   experiencecollected,
    // } = this.state;

    return (
      <div>
        <h1>CV</h1>
        <h2>Fill out every item on the forms.</h2>
        <Info />

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
