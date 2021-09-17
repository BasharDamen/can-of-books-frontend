import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class UpdateForm extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.updateBook}>
              {/**================================================ */}
              <Form.Group className="mb-3" controlId="formBasicEmail"  >
                <Form.Label>Book Title</Form.Label>
                <Form.Control
                  type="text"
                  name="bookTitle"
                  defaultValue={this.props.bookTitle}
                />
              </Form.Group>
              {/**================================================ */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="bookDescription"
                  defaultValue={this.props.bookDescription}
                />
              </Form.Group>
              {/**================================================ */}

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Select
                  aria-label="Default select example"
                  name="bookStatus"
                  defaultValue={this.props.bookStatus}
                >
                  <option value="Not Complete">Not Complete</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </Form.Select>
              </Form.Group>
              <hr/>
              {/**================================================ */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            </Form>
          </Modal.Body>
          
        </Modal>
      </>
    );
  }
}

export default UpdateForm;
