import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import ComposeEmail from "./composeEmail.js";

export const Menu = props => {
  return (
    <ListGroupItem key={props.id}>
      <a href="#" onClick={props.getEmails(props.type)}>{props.title}</a>
    </ListGroupItem>
  );
};

export const SideMenu = props => {
  return (
    <React.Fragment>
      <ComposeEmail sendEmail={props.sendEmail}/>
      {props.menues.map((menu, index) => {
        return (
          <ListGroup key={menu.id}>
            <Menu {...menu} getEmails={props.getEmails} />
          </ListGroup>
        );
      })}
    </React.Fragment>
  );
};
