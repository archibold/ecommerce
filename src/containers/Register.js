import React, { Component } from 'react';
import { navigate } from 'gatsby';
import Input from '../components/input';
import Button from '../components/button';
import { AuthContext } from '../contexts/AuthProvider';

class Register extends Component {
  state = {
    login: '',
    password: '',
    repeatPassword: '',
    errorRepeatPassword: '',
  }

  onChange = (input, value) => this.setState({ [input]: value })

  onRegister = () => {
    const { login, password, repeatPassword } = this.state;
    const { onRegister } = this.props;

    if (password !== repeatPassword) {
      this.setState({ errorRepeatPassword: 'passwords do not match' });
    } else {
      onRegister(login, password);
    }
  }

  render() {
    const { login, password, repeatPassword, name, errorRepeatPassword } = this.state;
    const { errorMessage } = this.props;
    const { onChange, onRegister } = this;

    return (
      <div>
          <Input
            label="Your Artist Name"
            value={ name }
            onChange={ value => onChange('name', value) }
          />
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
          <Input
            label="Repeat password"
            type="password"
            value={ repeatPassword }
            onChange={ value => onChange('repeatPassword', value) }
          />
          { errorRepeatPassword && <p className="error">{ errorRepeatPassword } </p>}
          { errorMessage && <p className="error">{ errorMessage } </p>}
          <Button onClick={ onRegister }>Register</Button>
      </div>
    );
  }
}

export default Register;
