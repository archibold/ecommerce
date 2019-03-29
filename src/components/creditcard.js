import React, { Component } from 'react';
import { Link } from 'gatsby';
import Input from './input';
import Button from './button';
import './styles.css';

class CreditCard extends Component {
  state = {
    card_number: '',
    expiration_month: '',
    expiration_year: '',
    name_on_card: '',
    card_code: '',
  }

  onChange = (input, value) => {
    this.setState({
      [input]: value,
    });
  }

  onCheck = () => {
    const { onCardCheck } = this.props;
    onCardCheck(this.state);
  }

  render() {
    const {
      card_number,
      expiration_month,
      expiration_year,
      name_on_card,
      card_code,
    } = this.state;
    const { errorMessage } = this.props;
    const { onChange, onCheck } = this;

    return (
      <div className="creditcardcomponent">
        <Input
          label="Card Number"
          value={card_number}
          onChange={value => onChange('card_number', value)}
        />
        <Input
          label="Expiration month"
          value={expiration_month}
          onChange={value => onChange('expiration_month', value)}
        />
        <Input
          label="Expiration year"
          value={expiration_year}
          onChange={value => onChange('expiration_year', value)}
        />
        <Input
          label="Card Holder"
          value={name_on_card}
          onChange={value => onChange('name_on_card', value)}
        />
        <Input
          label="CVV"
          value={card_code}
          onChange={value => onChange('card_code', value)}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        <Button onClick={onCheck}>Continue</Button>
      </div>
    )
  }
}

export default CreditCard;
