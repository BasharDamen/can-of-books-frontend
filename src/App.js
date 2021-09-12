import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';
import MyFavoriteBooks from './BestBooks';
import Profile from './Profile';
class App extends React.Component {

  render() {
    console.log('app', this.props);
    const isAuthenticated = this.props.auth0;
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {!isAuthenticated && <Login/>}
                {isAuthenticated && <MyFavoriteBooks/>}
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              </Route>
              <Route exact path="/profile">
              {isAuthenticated && <Profile/>}
              {!isAuthenticated && <p>There is No Data</p>}
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              </Route>

              
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default App;
