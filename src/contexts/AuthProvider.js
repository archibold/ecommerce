import React from 'react';
import { isAuth, login, logout, register } from '../service/login-service';

export const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
  state = {
    isAuth: false,
    isRegistred: false,
    errorMessage: null,
  }

  constructor(props) {
    super(props);

    isAuth()
      .then(isAuth => this.setState({ isAuth }));
  }

  onLogin = (email, password)  => {
    login(email, password)
      .then(() => this.setState({ isAuth: true }));
  }

  onLogout = () => {
    logout()
      .then(() => this.setState({ isAuth: false, isRegistred: false }));
  }

  onRegister = (email, password) => {
    register(email, password)
      .then(() => this.setState({ isRegistred: true }));
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          errorMessage: this.state.errorMessage,
          onLogin: this.onLogin,
          onLogout: this.onLogout,
          onRegister: this.onRegister,
        }}
      >
        { this.props.children }
      </AuthContext.Provider>
    );
  }
}
