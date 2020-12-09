import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
import "./App.css";

class App extends Component {
  state = {
    userName: "kybarnes",
    appInput: "Test",
    appInputLength: 0,
  };

  userNameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  appInputChanged = (event) => {
    this.setState({
      appInput: event.target.value,
      appInputLength: event.target.value.length,
    });
  };

  removeChar = (event) => {
    console.log(event.target.value)
  }

  render() {
    return (
      <div>
        <UserInput
          changed={this.userNameChangedHandler}
          value={this.state.userName}
        />
        <hr />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Gobel" />
        <hr />
        <input
          type="text"
          value={this.state.appInput}
          onChange={(event) => this.appInputChanged(event)}
        />
        <p>The length is {this.state.appInputLength}</p>
        <Validation textLength={this.state.appInputLength} />
        <Char appInput={this.state.appInput} click={(event) => this.removeChar(event)} />
      </div>
    );
  }
}

export default App;
