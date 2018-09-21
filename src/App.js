import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import logo from "./logo.svg";
import "./App.css";

import { SideMenu } from "./components/sideMenu.js";
import { EmailList, EmailPreview } from "./components/emailList.js";
import { get, post } from "./apis/apiHelper.js";

const menues = [
  {
    title: "Inbox",
    id: 1,
    isActive: true,
    type: "inbox"
  },
  {
    title: "Sent",
    id: 2,
    isActive: false,
    type: "sent"
  },
  {
    title: "Draft",
    id: 3,
    isActive: false,
    type: "draft"
  },
  {
    title: "Trash",
    id: 4,
    isActive: false,
    type: "trash"
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    // default State
    this.state = {
      selectedRow: null,
      emailList: []
    };

    this.onClick = this.onClick.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.getEmails = this.getEmails.bind(this);
  }

  getEmails(type) {
    return () => {
      get(`mails/${type}`, "", { Authorization: this.props.token })
        .then(jsonResponse => {
          this.setState({ emailList: jsonResponse.data });
        })
        .catch(errorResponse => {
          console.log("2222222222222222", errorResponse);
        });
    };
  }

  sendEmail(to, subject, body) {
    post("mails", { to, subject, body }, { Authorization: this.props.token })
    .then(jsonResponse => {
      console.log("Sent email", jsonResponse);
      // this.setState({ emailList: jsonResponse.data });
    })
    .catch(errorResponse => {
      console.log("2222222222222222", errorResponse);
    });
  }

  componentDidMount() {
    get("mails/inbox", "", { Authorization: this.props.token })
      .then(jsonResponse => {
        this.setState({ emailList: jsonResponse.data });
      })
      .catch(errorResponse => {
        console.log("2222222222222222", errorResponse);
      });
  }

  onClick(selectedRow) {
    return () => {
      this.setState({ selectedRow });
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <Row>
            <Col md={3}>
              <SideMenu
                menues={menues}
                sendEmail={this.sendEmail}
                getEmails={this.getEmails}
              />
            </Col>
            <Col md={9}>
              <EmailList
                emails={this.state.emailList}
                onClickRow={this.onClick}
              />
              <EmailPreview email={this.state.selectedRow} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
