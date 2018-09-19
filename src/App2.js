import React, { Component } from "react";

import Dashboard from "./App.js"
import  LoginForm from "./components/loginForm.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }

    this.handleLoginUser = this.handleLoginUser.bind(this);
  }

  handleLoginUser() {
    this.setState({ isLoggedIn: true })
  }

  render() {
    if(this.state.isLoggedIn) {
      return <Dashboard />
    }
    return (
      <div className="App">
        <LoginForm
          handleLoginUser={this.handleLoginUser}
        />
      </div>
    );
  }
}

export default App;
