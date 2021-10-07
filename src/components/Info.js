import React from "react";
import Display from "./Display.js";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { title: "Name: ", selected: "" },
      email: { title: "E-mail: ", selected: "" },
      telephone: { title: "Telephone: ", selected: "" },
      infoarray: [],
    };
    this.handlerOfChange = this.handlerOfChange.bind(this);
    this.handlerOfSubmit = this.handlerOfSubmit.bind(this);
  }

  handlerOfChange = function (event) {
    const target = event.target;
    const name = target.name;
    const selected = target.name.selected;
    const value = target.value;
    this.setState({
      [name]: { title: this.state.title, [id]: value },
    });
  };
  handlerOfSubmit = function (event) {
    event.preventDefault();
    const compileinfo = [
      this.state.name,
      this.state.email,
      this.state.telephone,
    ];
    this.setState({
      infoarray: this.state.infoarray.concat(compileinfo),
    });
  };

  render() {
    return (
      <div>
        <form id="info" name="info" onSubmit={this.handlerOfSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              id="username"
              value={this.state.name}
              onChange={this.handlerOfChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handlerOfChange}
            />
          </label>
          <label>
            Phone number:
            <input
              type="tel"
              name="telephone"
              id="telephone"
              value={this.state.telephone}
              onChange={this.handlerOfChange}
            />
          </label>
          <input type="submit" value="Save" />
        </form>
        <Display collected={this.state.infoarray} />
      </div>
    );
  }
}
export default Info;
