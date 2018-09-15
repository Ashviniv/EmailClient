import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";


export const Menu = props => {
  return <ListGroupItem key={props.id}>
      <a href="/">{props.title}</a>
    </ListGroupItem>;
};

export const SideMenu = (props) => {
  return <React.Fragment>
    {
      props.menues.map((menu, index) => {
        return <ListGroup key={menu.id}>
          <Menu {...menu} />
        </ListGroup>;
      })
    }
    </React.Fragment>;
}

