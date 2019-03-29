/*

Moving to React context API
Check new file FetchingProduct.js

*/
import React, { Component } from 'react';
import Product from '../components/product';
import '../service/buy-service';
import CreditCard from '../components/creditcard';
import Customer from '../components/customer';
import { checkCard, onBuyProduct, getProducts } from '../service/buy-service';

class FetchingExample extends Component {
  state = {
    products: null,
    ccError: null,
    ccToken: null,
    customerError: null,
    selectedProduct: null,
    transactionAccepted: false,
    transactionError: null,
  }

  componentDidMount() {
    getProducts().then(products => {
      this.setState({
        products: products,
      })
    });
  }

  onSelectProduct = product => {
    this.setState({ selectedProduct: product })
  }

  onCardCheck = cc => {
    this.setState({ ccError: null })

    checkCard(cc).then(result => {
      if (!result.success) {
        this.setState({ ccError: result.error.error_description })
      } else {
        this.setState({ token: result.token })
      }
    })
  }

  onBuy = customer => {
    const { selectedProduct, token } = this.state
    this.setState({
      transactionAccepted: false,
      transactionError: false,
    })

    onBuyProduct(customer, selectedProduct, token).then(result => {
      if (result.success) {
        this.setState({ transactionAccepted: true })
      } else {
        this.setState({ transactionError: result.error.error_description })
      }
    })
  }

  render() {
    const {
      products,
      ccError,
      customerError,
      token,
      selectedProduct,
      transactionAccepted,
      transactionError,
    } = this.state
    const { onCardCheck, onBuy, onSelectProduct } = this

    if (!products) {
      return null
    }

    const productsComponet = products.map((product, index) => {
      return (
        <Product
          key={index}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          isSelected={selectedProduct && selectedProduct.id === product.id}
          onSelect={() => onSelectProduct(product)}
        />
      )
    })

    return (
      <div className="container">
        <div className="products">{productsComponet}</div>
        {selectedProduct && (
          <div className="creditcard">
            <h1>{selectedProduct.title}</h1>

            {!token && (
              <CreditCard onCardCheck={onCardCheck} errorMessage={ccError} />
            )}
            {token && <Customer onBuy={onBuy} errorMessage={customerError} />}
            {transactionAccepted && (
              <div>
                Congratulation! Transaction was accepted. Wait for an email.
              </div>
            )}
            {transactionError && <div>{transactionError}</div>}
          </div>
        )}
      </div>
    )
  }
}

export default FetchingExample
