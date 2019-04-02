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

  onChange = (input, value) => this.setState({ [input]: value })

  render() {
    const { login, password } = this.state;
    const { errorMessage, onLogin } = this.props;
    const { onChange } = this;

    return (
      <div>
          <Input
            label="Login"
            value={ login }
            onChange={ value => onChange('login', value) }
          />
          <Input
            label="Password"
            type="password"
            value={ password }
            onChange={ value => onChange('password', value) }
          />
          { errorMessage && <p className="error">{ errorMessage } </p>}
          <Button onClick={ () => { onLogin(login, password) }}>Login</Button>
      </div>
    );
  }
}

export default Login;
