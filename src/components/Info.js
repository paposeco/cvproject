import React from "react";
//import Display from "./Display.js";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: { title: "Name: ", selected: "", alias: "username" },
      email: { title: "E-mail: ", selected: "", alias: "email" },
      telephone: { title: "Telephone: ", selected: "", alias: "telephone" },
      infoarray: [],
      edit: false,
    };
    this.handlerOfChange = this.handlerOfChange.bind(this);
    this.handlerOfSubmit = this.handlerOfSubmit.bind(this);
    this.editInfo = this.editInfo.bind(this);
  }

  handlerOfChange = function (event) {
    const target = event.target;
    const nameoftarget = target.name;
    const value = target.value;
    this.setState({
      [nameoftarget]: {
        title: this.state[nameoftarget].title,
        selected: value,
        alias: this.state[nameoftarget].alias,
      },
    });
  };

  handlerOfSubmit = function (event) {
    event.preventDefault();
    const compileinfo = [
      this.state.username,
      this.state.email,
      this.state.telephone,
    ];
    // para que so envie a informaçao depois do vector estar actualizado, chamo uma funçao depois do setstate, pq ele é async
    this.setState(
      {
        infoarray: this.state.infoarray.concat(compileinfo),
        edit: false,
      },
      () => {
        // nao percebo muito bem isto. acho que quando chamo a Info tem um props associado que tem um metodo chamado seninfo
        this.props.sendInfo(this.state.infoarray);
      }
    );
  };

  editInfo = function () {
    const objarray = this.props.information;
    if (objarray !== undefined) {
      objarray.map((element) => {
        return this.setState({
          [element.alias]: {
            title: this.state[element.alias].title,
            selected: element.selected,
            alias: element.alias,
          },
        });
      });
    }
  };

  componentDidMount() {
    if (this.props.weGoAgain === "yes") {
      this.editInfo();
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
        {/* <Display collected={this.state.infoarray} /> */}
      </div>
    );
    // } else {

    //   return (
    //     <div>
    //       <form id="info" name="info" onSubmit={this.handlerOfSubmit}>
    //         <label>
    //           Name:
    //           <input
    //             type="text"
    //             name="username"
    //             value={this.props.information[0].selected}
    //             onChange={this.handlerOfChange}
    //           />
    //         </label>
    //         <label>
    //           Email:
    //           <input
    //             type="email"
    //             name="email"
    //             value={this.props.information[1].selected}
    //             onChange={this.handlerOfChange}
    //           />
    //         </label>
    //         <label>
    //           Phone number:
    //           <input
    //             type="tel"
    //             name="telephone"
    //             value={this.props.information[2].selected}
    //             onChange={this.handlerOfChange}
    //           />
    //         </label>
    //         <input type="submit" value="Save" />
    //       </form>
    //       {/* <Display collected={this.state.infoarray} /> */}
    //     </div>
    //   );
    // }
  }
}
export default Info;
