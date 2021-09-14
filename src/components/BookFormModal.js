import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      status: "",
      showModal: false,
      favBooksArr: [],
    };
  }

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };

  addBook = (event) => {
    event.preventDefault();
    console.log("hi");
    const { user } = this.props.auth0;
    const email = user.email;
    let bookObj = {
      bookTitle: this.state.title,
      bookDescription: this.state.description,
      bookStatus: this.state.status,
      clientEmail: email,
    };
    console.log(bookObj);
    axios
      .post(`https://can-of-books-database.herokuapp.com/addBook`, bookObj)
      .then((result) => {
        this.setState({
          favBooksArr: result.data,
          showModal: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Add Book
        </Button>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Book Information</Modal.Title>
          </Modal.Header>
          <Form>
            <Form.Group className="mb-3" name="bookTitle" controlId="bookTitle">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                onChange={(event) =>
                  this.setState({ title: event.target.value })
                }
                type="text"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              name="bookDescription"
              controlId="bookDescription"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={(event) =>
                  this.setState({ description: event.target.value })
                }
                type="text"
              />
            </Form.Group>

            <Form.Select
              onChange={(event) =>
                this.setState({ status: event.target.value })
              }
              name="bookStatus"
              aria-label="bookStatus"
            >
              <option value="Not Complete">Not Complete</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </Form.Select>
          </Form>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={this.addBook}>
              Submit
            </Button>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withAuth0(BookFormModal);
