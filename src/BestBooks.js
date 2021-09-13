import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./BestBooks.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myBooksArr: [],
    };
  }
  
  componentDidMount = () => {
    // const { user } = this.props.auth0;
    // let email = user.email;
    axios
      .get(`http://localhost:3010/books`)
      .then((result) => {
        console.log(result.data);
        this.setState({
          myBooksArr: result.data,
        });
        console.log(this.state.myBooksArr);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  render() {
    // const isAuthenticated = this.props.auth0;

    return (
      <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>This is a collection of my favorite books</p>
        <Carousel fade>
          {this.state.myBooksArr.map((item) =>{
            return (<Carousel.Item>
            <img
              className="d-block w-100"
              src={item.imgURL}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Title: {item.title}</h3>
              <p>Overview: {item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>)})}
        </Carousel>
        {/* {this.state.myBooksArr.map((item) => {
          return <p>{item.title}</p>;
        })} */}
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
