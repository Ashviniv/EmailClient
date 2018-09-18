import React, { PureComponent } from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button, FormFeedback } from "reactstrap"

class LoginForm extends PureComponent {
  render() {
    return <Row>
        <Col md={4} />
        <Col md={4} className="border mt-5">
          <h4 className="mt-3">Login Form</h4>
          <Form>
            <FormGroup>
              <Label for="exampleEmail" className="float-left">
                Email
              </Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" invalid />
              <FormFeedback className="text-justify">
                Oh noes! that name is already taken
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword" className="float-left">
                Password
              </Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup check row className="mb-4">
              <Button>Submit</Button>
            </FormGroup>
          </Form>
        </Col>
        <Col md={4} />
      </Row>;
  }
}

export default LoginForm;