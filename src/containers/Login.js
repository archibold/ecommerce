import React, { Component } from 'react';
import { Link } from 'gatsby';
import Input from '../components/input';
import Button from '../components/button';
import { isAuth } from '../service/login-service';

class Login extends Component {
  state = {
    login: '',
    password: '',
    errorMessage: '',
    isAuth: false,
  }

  componentDidMount() {
    isAuth().then(isAuth => {
      this.setState({
        isAuth: isAuth,
      });
    });
  }

  onChange = (input, value) => {
    this.setState({
      [input]: value,
    });
  }

  onLogin = () => {}

  render() {
    const {
      login,
      password,
      errorMessage,
      isAuth,
    } = this.state;

    const { onChange, onLogin } = this;

    return (
      <div>
        {!isAuth && <div>
          <Input
            label="Login"
            value={login}
            onChange={value => onChange('login', value)}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={value => onChange('password', value)}
          />
          {errorMessage && <p className="error">{errorMessage}</p>}
          <Button onClick={onLogin}>Login</Button>
        </div>}
        {
          isAuth && <div>OK</div>
        }
      </div>
    )
  }
}

export default Login;
