import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BestBooks.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookItem from "./components/BookItem";
import Button from 'react-bootstrap/Button';
import BookFormModal from "./components/BookFormModal";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myBooksArr: [],
    };
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    let email = user.email;
    axios
      .get(`https://can-of-books-database.herokuapp.com/books?email=${email}`)
      .then((result) => {
        console.log(result);
        this.setState({
          myBooksArr: result.data,
        });
        console.log(this.state.myBooksArr);
      })
      .catch((err) => {
        console.log("error");
      });
  };
  deleteBook = (id) =>{
    const { user } = this.props.auth0;
    const email = user.email;

    axios
    .delete(`https://can-of-books-database.herokuapp.com/deletBook/${id}?email=${email}`)
    .then(result=>{
      this.setState({
        myBooksArr : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
  render() {
    // const isAuthenticated = this.props.auth0;

    return <div className="bastBooksItems">
      <div className="upper">

    <h1>My Favourite Books</h1>
    <BookFormModal/>
    </div>
    <BookItem
    myBooksArr = {this.state.myBooksArr}
    deleteBook = {this.deleteBook}
    />
    </div>;
  }
}

export default withAuth0(MyFavoriteBooks);
