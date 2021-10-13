import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.handlerOfSubmit = this.handlerOfSubmit.bind(this);
    this.handlerOfChange = this.handlerOfChange.bind(this);
    this.fillOutForm = this.fillOutForm.bind(this);
    this.state = {
      schoolname: { title: "School Name: ", selected: "", alias: "schoolname" },
      studytitle: { title: "Study: ", selected: "", alias: "studytitle" },
      startdate: { title: "Start Date: ", selected: "", alias: "startdate" },
      enddate: { title: "End Date: ", selected: "", alias: "enddate" },
      completestudy: [],
    };
  }
  handlerOfSubmit = function (event) {
    event.preventDefault();
    this.setState(
      {
        completestudy: this.state.completestudy.concat([
          this.state.schoolname,
          this.state.studytitle,
          this.state.startdate,
          this.state.enddate,
        ]),
      },
      () => {
        this.props.getText(this.state.completestudy);
      }
    );
  };

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

  // on edit
  fillOutForm = function () {
    const arrayreceived = this.props.toedit;
    this.setState({
      schoolname: {
        title: this.state.schoolname.title,
        selected: arrayreceived[0].selected,
        alias: this.state.schoolname.alias,
      },
      studytitle: {
        title: this.state.studytitle.title,
        selected: arrayreceived[1].selected,
        alias: this.state.studytitle.alias,
      },
      startdate: {
        title: this.state.startdate.title,
        selected: arrayreceived[2].selected,
        alias: this.state.startdate.alias,
      },
      enddate: {
        title: this.state.enddate.title,
        selected: arrayreceived[3].selected,
        alias: this.state.enddate.alias,
      },
    });
  };

  componentDidMount() {
    const emptyObject = Object.keys(this.props.toedit).length;
    if (emptyObject !== 0) {
      this.fillOutForm();
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handlerOfSubmit}>
          <label>
            {this.state.schoolname.title}
            <input
              type="text"
              name="schoolname"
              value={this.state.schoolname.selected}
              onChange={this.handlerOfChange}
            />
          </label>
          <label>
            {this.state.studytitle.title}
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
