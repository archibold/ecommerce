import React, {Component} from 'react';
import {Link} from 'gatsby';
import Input from './input';
import Button from './button';
import './styles.css';

class Customer extends Component {
  state = {
    email: "",
  }

  onChange = (input, value) => {
    this.setState({
      [input]: value
    });
  }

  onBuy = () => {
    const {
      onBuy
    } = this.props;
    onBuy(this.state);
  }

  render() {
    const { email } = this.state;
    const { errorMessage } = this.props;
    const {
      onChange,
      onBuy
    } = this;

    return (
      <div>
        <Input label="Email" value={email} onChange={(value) => onChange("email", value)}/>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <Button onClick={onBuy}>Buy</Button>
      </div>
    );
  }
}
export default Customer;
