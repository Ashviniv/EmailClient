import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

import logo from './logo.svg';
import './App.css';

import { SideMenu } from "./components/sideMenu.js";
import { EmailList, EmailPreview } from "./components/emailList.js";

const menues = [
  {
    title: "Inbox",
    id: 1,
    isActive: true
  },
  {
    title: "Sent",
    id: 2,
    isActive: false
  },
  {
    title: "Draft",
    id: 3,
    isActive: false
  },
  {
    title: "Trash",
    id: 4,
    isActive: false
  }
];

const emailList = [
  {
    title: "monit alert -- Exists delayed_job",
    id: 1,
    body: <h6>monit alert -- Exists delayed_job</h6>
  },
  {
    title: "monit alert -- Exists delayed_job 2",
    id: 2,
    body: <h6>monit alert -- Exists delayed_job 2</h6>
  },
  {
    title: "monit alert -- Exists delayed_job 3",
    id: 3,
    body: "<h1>monit alert -- Exists delayed_job 3</h1>"
  },
  {
    title: "monit alert -- Exists delayed_job 4",
    id: 4,
    body: "<h1>monit alert -- Exists delayed_job 4</h1>"
  }
];



class App extends Component {
  constructor(props) {
    super(props);

    // default State
    this.state = {
      selectedRow: emailList[0]
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(selectedRow) {
    return () => {
      this.setState({ selectedRow })
    }
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
              />
            </Col>
            <Col md={9}>
              <EmailList emails={emailList} onClickRow={this.onClick}/>
              <EmailPreview email={this.state.selectedRow}/>
            </Col>
          </Row>

        </div>
      </div>
    );
  }
}

export default App;
