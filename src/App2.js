import React, { Component } from "react";

import Dashboard from "./App.js"
import  LoginForm from "./components/loginForm.js";
import {  post } from "./apis/apiHelper.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }

    this.handleLoginUser = this.handleLoginUser.bind(this);
  }

  handleLoginUser(email, password) {
    post("session", {user: { email, password }})
    .then(jsonResponse => {
      this.setState({ token: jsonResponse.data.token, isLoggedIn: true })
    }).catch(errorResponse => {
      console.log(errorResponse)
    })
  }

  render() {
    if(this.state.isLoggedIn) {
      return <Dashboard token={this.state.token}/>
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
