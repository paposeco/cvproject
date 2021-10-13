import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.handlerOfSubmit = this.handlerOfSubmit.bind(this);
    this.handlerOfChange = this.handlerOfChange.bind(this);
    this.fillOutForm = this.fillOutForm.bind(this);
    this.state = {
      username: { title: "Name: ", selected: "", alias: "username" },
      email: { title: "E-mail: ", selected: "", alias: "email" },
      telephone: { title: "Telephone: ", selected: "", alias: "telephone" },
      completeinfo: [],
    };
  }

  handlerOfSubmit = function (event) {
    event.preventDefault();
    this.setState(
      {
        completeinfo: this.state.completeinfo.concat([
          this.state.username,
          this.state.email,
          this.state.telephone,
        ]),
      },
      () => {
        this.props.getText(this.state.completeinfo);
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

  fillOutForm = function () {
    const arrayreceived = this.props.toedit;
    this.setState({
      username: {
        title: this.state.username.title,
        selected: arrayreceived[0].selected,
        alias: this.state.username.alias,
      },
      email: {
        title: this.state.email.title,
        selected: arrayreceived[1].selected,
        alias: this.state.email.alias,
      },
      telephone: {
        title: this.state.telephone.title,
        selected: arrayreceived[2].selected,
        alias: this.state.telephone.alias,
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
        <form id="info" name="info" onSubmit={this.handlerOfSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="username"
              value={this.state.username.selected}
              onChange={this.handlerOfChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email.selected}
              onChange={this.handlerOfChange}
            />
          </label>
          <label>
            Phone number:
            <input
              type="tel"
              name="telephone"
              value={this.state.telephone.selected}
              onChange={this.handlerOfChange}
            />
          </label>
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default Info;
