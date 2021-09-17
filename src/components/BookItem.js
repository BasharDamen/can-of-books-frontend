import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { withAuth0 } from "@auth0/auth0-react";
class BookItem extends React.Component {

  // updateBook = (event)=>{
  //   event.preventDefault();
  //   const { user } = this.props.auth0;
  //   const email = user.email;
  //   const bookObj = {
  //     bookTitle : event.target.bookTitle.value,
  //     bookDescription: event.target.bookDescription.value,
  //     bookStatus : event.target.bookStatus.value,
  //     clientEmail : email,
  //   }

  //     axios
  //   .put(`http://localhost:3010/updateBook/${this.state.bookId}`, bookObj)
  //   .then(result=>{
  //     console.log(result.data);
  //     this.setState({
  //       myBooksArr:result.data,
  //       displayUpdateForm:false
  //     })
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })

  //   console.log(bookObj);
  // }

  // updateFormDisplay=(item)=>{
  //   this.setState({
  //     displayUpdateForm:true,
  //     bookTitle: item.title,
  //     bookDescription: item.desciption,
  //     bookStatus: item.status,
  //     bookId : item._id
  //   })

  // }
  // handleClose = ()=>{
  //   this.setState({
  //     displayUpdateForm: false
  //   })
  // }
  render() {
    
    return (
      <>
        {/* <Row xs={1} md={3} className="g-4">
                </Row> */}
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{this.props.item.title}</Card.Title>
                <Card.Text>{this.props.item.desciption}</Card.Text>
                <Card.Text>{this.props.item.status}</Card.Text>
                <Button
                  variant="secondary"
                  name="DeleteBook"
                  onClick={() => this.props.deleteBook(this.props.item._id)}
                >
                  Delete Book
                </Button>
                <Button
                  variant="primary"
                  name="UpdateBook"
                  onClick={() => {
                    this.props.updateFormDisplay(this.props.item);
                  }}
                >
                  Update Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
      </>
    );
  }
}

export default withAuth0(BookItem);
