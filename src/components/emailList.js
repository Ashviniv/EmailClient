import React from "react";
import {
  Input,
  Button,
  Table,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export const EmailList = props => {
  if (props.emails.length) {
    return (
      <Table className="mt-4">
        <tbody>
          {props.emails.map(email => {
            return (
              <EmailRow
                {...email}
                key={email.id}
                onClickRow={props.onClickRow}
              />
            );
          })}
        </tbody>
      </Table>
    );
  } else {
    return (
      <Table
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <tbody>
          <i>No Emails to Display!!</i>
        </tbody>
      </Table>
    );
  }
};

const EmailRow = props => {
  return (
    <tr key={props.id} onClick={props.onClickRow(props)}>
      <td>
        <Input type="checkbox" />
      </td>
      <td>
        <h4>
          <a href="/">{props.title}</a>
        </h4>
      </td>
      <td>
        <Button color="primary">R</Button>
      </td>
    </tr>
  );
};

export const EmailPreview = props => {
  if (props.email) {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            {props.email.title}
            <i>From: {props.from} </i>
          </CardTitle>
          <CardSubtitle>{props.email.body}</CardSubtitle>
        </CardBody>
      </Card>
    );
  }

  return null;
};
