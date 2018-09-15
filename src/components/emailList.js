import React from "react";
import { Input, Button, Table, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export const EmailList = (props) => {
  return (
    <Table>
      <tbody>
      {
        props.emails.map(email => {
          return <EmailRow {...email} key={email.id} onClickRow={props.onClickRow} />;
        })
      }
      </tbody>
    </Table>
  )
}

const EmailRow = (props) => {
  return (
    <tr
      key={props.id}
      onClick={props.onClickRow(props)}>
      <td>
        <Input type="checkbox" />
      </td>
      <td>
        <h4><a href="/">{ props.title }</a></h4>
      </td>
      <td>
        <Button color="primary">R</Button>
      </td>
    </tr>
  )
}

export const EmailPreview = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          { props.email.title }
        </CardTitle>
        <CardSubtitle>
          { props.email.body }
        </CardSubtitle>
      </CardBody>
    </Card>
  )
}