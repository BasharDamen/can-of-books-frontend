import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';
// import BestBooks from './BestBooks';
import MyFavoriteBooks from "./BestBooks";
import Profile from './Profile';
import {withAuth0} from '@auth0/auth0-react'
import LoginButton from './LoginButton';
class App extends React.Component {

  render() {
    console.log('app', this.props);
    const {isAuthenticated} = this.props.auth0;
    return(
      <main>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                {isAuthenticated ? <MyFavoriteBooks/> : <Login/>}
              {/* {isAuthenticated && <Login/>}
              {isAuthenticated && <MyFavoriteBooks/>} */}
                {/* {!isAuthenticated && <Login/>}
                {isAuthenticated && <MyFavoriteBooks/>} */}
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              </Route>
              <Route exact path="/profile">
              <Profile/>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              </Route>

              
            </Switch>
            <Footer />
        </Router>
      </main>
    );
  }
}

export default withAuth0(App);
