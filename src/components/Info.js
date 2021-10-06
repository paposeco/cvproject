import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      telephone: "",
      infoarray: [],
    };
    this.handlerOfChange = this.handlerOfChange.bind(this);
    this.handlerOfSubmit = this.handlerOfSubmit.bind(this);
  }

  handlerOfChange = function (event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
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
    console.log(compileinfo);
  };

  render() {
    return (
      <form id="info" name="info" onSubmit={this.handlerOfSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handlerOfChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handlerOfChange}
          />
        </label>
        <label>
          Phone number:
          <input
            type="tel"
            name="telephone"
            value={this.state.telephone}
            onChange={this.handlerOfChange}
          />
        </label>
        <input type="submit" value="Save" />
      </form>
    );
  }
}
export default Info;
