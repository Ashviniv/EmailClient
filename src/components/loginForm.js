import React, { PureComponent } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
  FormFeedback
} from "reactstrap";

const EMAIL_REGEX = /^([a-zA-Z0-9_+.'])+@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,6})+$/;

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);

    //default State
    this.state = {
      email: "",
      password: "",
      errors: {
        email: '',
        password: ''
      }
    };

    this._validateEmail = this._validateEmail.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleFormSubmit(e) {
    let { email } = this.state.errors;
    let isValidEmail = this._validateEmail()
    e.preventDefault();

    if(isValidEmail) {
      this.props.handleLoginUser(this.state.email, this.state.password)
    } else {
      return false
    }
  }

  _validateEmail() {
    let { email, errors } = this.state;
    let emailErrorMsg = "";

    /**Email cann't be blank */
    if (!email) {
      emailErrorMsg = "Must enter an email address.";
    } else {
      /**Email format should be correct */
      emailErrorMsg = EMAIL_REGEX.test(email)
        ? ""
        : "Must enter a valid email address.";
    }

    this.setState({
      errors: {
        ...errors,
        email: emailErrorMsg
      }
    });

    return emailErrorMsg ? false : true
  }

  _handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      this._validateEmail()
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <Row>
        <Col md={4} />
        <Col md={4} className="border mt-5">
          <h4 className="mt-3">Login Form</h4>
          <Form
            onSubmit={this._handleFormSubmit}
          >
            <FormGroup>
              <Label for="exampleEmail" className="float-left">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter any valid email Address"
                invalid={errors.email ?  true : false}
                onChange={this._handleInputChange}
              />
              <FormFeedback className="text-justify">
                { errors.email }
              </FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword" className="float-left">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="any password"
                onChange={this._handleInputChange}
              />
            </FormGroup>

            <FormGroup check row className="mb-4">
              <Button>Submit</Button>
            </FormGroup>
          </Form>
        </Col>
        <Col md={4} />
      </Row>
    );
  }
}

export default LoginForm;
