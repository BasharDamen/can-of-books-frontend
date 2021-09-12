import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    return (<>
    <div>Name: <strong>{user.name}</strong> </div>
    <div>Email: <strong>{user.email}</strong></div>
    </>)
  }
}

export default withAuth0(Profile);
