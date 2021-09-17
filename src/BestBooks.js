import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BestBooks.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookItem from "./components/BookItem";
import Button from 'react-bootstrap/Button';
import BookFormModal from "./components/BookFormModal";
import UpdateForm from "./components/UpdateForm";
import Row from "react-bootstrap/Row";


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myBooksArr: [],
      displayAddForm:false,
      displayUpdateForm: false,
      bookTitle:'',
      bookDescription:'',
      bookStatus:'',
      bookId:''
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
        console.log(err);
      });
  };
  /**========================================Add Item ===========================================================*/

  addBook = (event) => {
    event.preventDefault();
    console.log("hi");
    const { user } = this.props.auth0;
    const email = user.email;
    let bookObj = {
      bookTitle: event.target.bookTitle.value,
      bookDescription: event.target.bookDescription.value,
      bookStatus: event.target.bookStatus.value,
      clientEmail: email,
    };
    console.log(bookObj);
    axios
      .post(`https://can-of-books-database.herokuapp.com/addBook`, bookObj)
      .then((result) => {
        this.setState({
          favBooksArr: result.data,
          displayAddForm: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addFormDisplay=()=>{
    this.setState({
      displayAddForm: true,
    })
  }

  handleCloseAddForm=()=>{
    this.setState({
      displayAddForm:false,
    })
  }
  /**========================================Delet Item ===========================================================*/
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
  /** =======================================Update Item =========================================================== */

  updateBook = (event)=>{
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const updatedItem = {
      bookTitle : event.target.bookTitle.value,
      bookDescription: event.target.bookDescription.value,
      bookStatus : event.target.bookStatus.value,
      clientEmail : email,
    }

      axios
    .put(`https://can-of-books-database.herokuapp.com/updateBook/${this.state.bookId}`, updatedItem)
    .then(result=>{
      console.log(result.data);
      this.setState({
        myBooksArr:result.data,
        displayUpdateForm:false
      })
    })
    .catch(err=>{
      console.log(err);
    })


    console.log(updatedItem);
  }

  updateFormDisplay=(item)=>{
    this.setState({
      displayUpdateForm:true,
      bookTitle: item.title,
      bookDescription: item.desciption,
      bookStatus: item.status,
      bookId : item._id
    })

  
  }
  handleClose = ()=>{
    this.setState({
      displayUpdateForm: false
    })
  }

  


  render() {
    // const isAuthenticated = this.props.auth0;

    return <div className="bastBooksItems">
      <div className="upper">

    <h1>My Favourite Books</h1>
    <Button variant="primary" onClick={this.addFormDisplay}>
              Add Book
            </Button>

    <BookFormModal
    show = {this.state.displayAddForm}
    handleClose = {this.handleCloseAddForm}
    addBook ={this.addBook}
    />
    </div>
    <Row xs={1} md={3} className="g-4">
    {this.state.myBooksArr.map(item =>{
    return (
    <BookItem
    item={item}
    updateFormDisplay = {this.updateFormDisplay}
    deleteBook = {this.deleteBook}
    />)})}
    </Row>
    <UpdateForm
            show={this.state.displayUpdateForm}
            handleClose = {this.handleClose}
            bookTitle = {this.state.bookTitle}
            bookDescription = {this.state.bookDescription}
            bookStatus = {this.state.bookStatus}
            updateBook = {this.updateBook}
            />
    </div>;
  }
}

export default withAuth0(MyFavoriteBooks);