import React from 'react';
import { isAuth } from '../service/login-service';

export const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
  state = {
    isAuth: false,
  }

  constructor(props) {
    super(props);

    isAuth()
      .then(isAuth => this.setState({isAuth}));
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
