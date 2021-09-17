import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { withAuth0 } from "@auth0/auth0-react";

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

  // handleClose = () => {
  //   this.setState({
  //     showModal: false,
  //   });
  // };

  // handleShow = () => {
  //   this.setState({
  //     showModal: true,
  //   });
  // };

  // addBook = (event) => {
  //   event.preventDefault();
  //   console.log("hi");
  //   const { user } = this.props.auth0;
  //   const email = user.email;
  //   let bookObj = {
  //     bookTitle: this.state.title,
  //     bookDescription: this.state.description,
  //     bookStatus: this.state.status,
  //     clientEmail: email,
  //   };
  //   console.log(bookObj);
  //   axios
  //     .post(`https://can-of-books-database.herokuapp.com/addBook`, bookObj)
  //     .then((result) => {
  //       this.setState({
  //         favBooksArr: result.data,
  //         showModal: false,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Book Information</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.props.addBook}>
            <Form.Group className="mb-3"  controlId="bookTitle">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                name="bookTitle"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              
              controlId="bookDescription"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="bookDescription"
              />
            </Form.Group>

            <Form.Select
              name="bookStatus"
              aria-label="bookStatus"
            >
              <option value="Not Complete">Not Complete</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </Form.Select>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Cancel
            </Button>
          </Form>
        </Modal>
      </>
    );
  }
}

export default withAuth0(BookFormModal);