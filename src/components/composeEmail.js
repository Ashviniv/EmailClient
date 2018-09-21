import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormFeedback,
  FormGroup,
  Input
} from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      to: "",
      subject: "",
      message: ""
    };

    this.toggle = this.toggle.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  _handleFormSubmit(e) {
    let { to, subject, message } = this.state;
    e.preventDefault();

    if( to && subject && message ) {
      this.props.sendEmail(to, subject, message)
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button
          color="primary"
          className="mt-4 mb-3"
          style={{ width: "100%" }}
          onClick={this.toggle}
        >
          Compose
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>New Message</ModalHeader>
          <ModalBody>
            <Form onSubmit={this._handleFormSubmit}>
              <FormGroup>
                <Input
                  name="to"
                  id="toEmail"
                  type="email"
                  placeholder="To"
                  required
                  onChange={this._handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Input
                  name="subject"
                  id="subject"
                  placeholder="subject"
                  required
                  onChange={this._handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Input
                  type="textarea"
                  name="message"
                  id="emailBody"
                  required
                  placeholder="Message"
                  rows="7"
                  cols="30"
                  onChange={this._handleInputChange}
                />
              </FormGroup>
              <FormGroup className="float-right">
                <Button
                  color="secondary"
                  className="mr-2"
                  onClick={this.toggle}
                >
                  Cancel
                </Button>
                <Button color="primary">Send</Button>{" "}
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
