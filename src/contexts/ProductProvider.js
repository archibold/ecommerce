import React from 'react';
import { checkCard, onBuyProduct, getProducts } from '../service/buy-service';

export const ProductContext = React.createContext();

export class ProductProvider extends React.Component {
  state = {
    products: [],
    creditCardError: null,
    token: null,
    transactionAccepted: false,
    transactionError: null,
  }

  constructor(props) {
    super(props);

    getProducts()
      .then(products => this.setState({ products: products }) );
  }

  onCardCheck = creditCard => {
    this.setState({
      creditCardError: null,
      token: null,
    });

    checkCard(creditCard).then(result => {
      if (!result.success) {
        this.setState({ creditCardError: result.error.error_description });
      } else {
        this.setState({ token: result.token });
      }
    });
  }

  onBuy = (customer, product) => {
    const { token } = this.state;

    this.setState({
      transactionAccepted: false,
      transactionError: null,
    })

    onBuyProduct(customer, product, token).then(result => {
      if (result.success) {
        this.setState({ transactionAccepted: true });
      } else {
        this.setState({ transactionError: result.error.error_description });
      }
    })
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          products: this.state.products,
          isCardOK: !!this.state.token,
          creditCardError: this.state.creditCardError,
          isTransactionAccepted: this.state.transactionAccepted,
          transactionError: this.state.transactionError,
          onCardCheck: this.onCardCheck,
          onBuy: this.onBuy,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
