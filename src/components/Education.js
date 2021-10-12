import React from "react";
import uniqid from "uniqid";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolname: { title: "School Name: ", selected: "", alias: "schoolname" },
      studytitle: { title: "Study: ", selected: "", alias: "studytitle" },
      startdate: { title: "Start Date: ", selected: "", alias: "startdate" },
      enddate: { title: "End Date: ", selected: "", alias: "enddate" },
      id: uniqid(),
      //      id: { title: "Id: ", selected: uniqid(), alias: "id" },
      collectionofstudies: [],
      edit: false,
    };
    this.handlerOfSubmit = this.handlerOfSubmit.bind(this);
    this.handlerOfChange = this.handlerOfChange.bind(this);
    this.editEducation = this.editEducation.bind(this);
  }

  handlerOfChange = function (event) {
    const statename = event.target.name;
    this.setState({
      [statename]: {
        title: this.state[statename].title,
        selected: event.target.value,
        alias: this.state[statename].alias,
      },
    });
  };

  handlerOfSubmit = function (event) {
    event.preventDefault();
    const study = [
      this.state.schoolname,
      this.state.studytitle,
      this.state.startdate,
      this.state.enddate,
      this.state.id,
    ];
    this.setState(
      {
        collectionofstudies: this.state.collectionofstudies.concat([study]),
        edit: false,
      },
      () => {
        // se calhar devia enviar so um study? nao sei se ele guarda ou nao
        this.props.sendInfo([study]);
        //this.props.sendInfo(this.state.collectionofstudies);
        this.setState({
          schoolname: {
            title: this.state.schoolname.title,
            selected: "",
            alias: this.state.schoolname.alias,
          },
          studytitle: {
            title: this.state.studytitle.title,
            selected: "",
            alias: this.state.studytitle.alias,
          },
          startdate: {
            title: this.state.startdate.title,
            selected: "",
            alias: this.state.startdate.alias,
          },
          enddate: {
            title: this.state.enddate.title,
            selected: "",
            alias: this.state.enddate.alias,
          },
          id: uniqid(),
        });
      }
    );
  };

  editEducation = function () {
    const objarray = this.props.sendEducation;
    console.log("edit");
    console.log(objarray);
    if (objarray !== undefined) {
      objarray.map((element) => {
        return this.setState({
          [element.alias]: {
            title: element.title,
            selected: element.selected,
            alias: element.alias,
          },
        });
      });
    }
  };

  componentDidMount() {
    console.log(this.props.weGoAgain);
    if (this.props.weGoAgain === "yes") {
      this.editEducation();
    }
  }

  render() {
    return (
      <div>
        <form id="education" name="education" onSubmit={this.handlerOfSubmit}>
          <label>
            School name:
            <input
              type="text"
              name="schoolname"
              value={this.state.schoolname.selected}
              onChange={this.handlerOfChange}
            />
          </label>
          <label>
            Study:
            <input
              type="text"
              name="studytitle"
              value={this.state.studytitle.selected}
              onChange={this.handlerOfChange}
            />
          </label>
          <label>
            Dates:
            <input
              type="date"
              name="startdate"
              value={this.state.startdate.selected}
              onChange={this.handlerOfChange}
            />{" "}
            to{" "}
            <label>
              <input
                type="date"
                name="enddate"
                value={this.state.enddate.selected}
                onChange={this.handlerOfChange}
              />
            </label>
          </label>
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default Education;
