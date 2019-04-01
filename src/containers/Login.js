import React, { Component } from 'react';
import { navigate } from 'gatsby';
import Input from '../components/input';
import Button from '../components/button';
import { AuthContext } from '../contexts/AuthProvider';
class Login extends Component {
  state = {
    login: '',
    password: '',
  }

  onChange = (input, value) => {
    this.setState({
      [input]: value,
    });
  }

  render() {
    const {
      login,
      password,
    } = this.state;

    const { onChange } = this;

    return (
      <AuthContext.Consumer>
        { authContext => {
          //TODO: don't need to navigate
          if (authContext.isAuth) navigate('/');

          return (
            <div>
                <Input
                  label="Login"
                  value={ login}
                  onChange={ value => onChange('login', value)}
                />
                <Input
                  label="Password"
                  type="password"
                  value={ password}
                  onChange={ value => onChange('password', value)}
                />
                { authContext.errorMessage && <p className="error">{ authContext.errorMessage} </p>}
                <Button onClick={ () => { authContext.onLogin(login, password) }}>Login</Button>
            </div>
          );
        }}
      </AuthContext.Consumer>
    )
  }
}

export default Login;
