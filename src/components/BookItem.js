import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
class BookItem extends React.Component {

  constructor(props){
    super(props);
    this.state={
      myBooksArr:[]
    }
  }

  
  render() {
    const booksData = this.props.myBooksArr
    console.log(booksData);
    return (
      <>
        <Row xs={1} md={3} className="g-4">
          {booksData.map(item =>{
            return(<Col>
              <Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.desciption}
                  </Card.Text>
                  <Card.Text>
                    {item.status}
                  </Card.Text>
                  <Button variant="secondary" name='DeleteBook' onClick={() => this.props.deleteBook(item._id)} >Delete Book</Button>
                </Card.Body>
              </Card>
            </Col>)})}
            </Row>
      </>
    );
  }
}

export default withAuth0(BookItem);
