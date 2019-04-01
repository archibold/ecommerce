import React from 'react';
import { isAuth, login, logout } from '../service/login-service';

export const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
  state = {
    isAuth: false,
    errorMessage: null,
  }

  constructor(props) {
    super(props);

    isAuth()
      .then(isAuth => this.setState({ isAuth }));
  }

  onLogin(email, password) {
    login(email, password)
      .then(() => this.setState({ isAuth: true }));
  }

  onLogout() {
    logout()
      .then(() => this.setState({ isAuth: false }));
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          errorMessage: this.state.errorMessage,
          onLogin: login,
          onLogout: logout,
        }}
      >
        { this.props.children }
      </AuthContext.Provider>
    );
  }
}
