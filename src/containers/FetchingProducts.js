import React, { Component } from 'react';
import Product from '../components/product';
import CreditCard from '../components/creditcard';
import Customer from '../components/customer';
import Products from '../components/products';
import { ProductContext } from '../contexts/ProductProvider';

class FetchingExample extends Component {
  state = {
    selectedProduct: {},
  }

  onSelectProduct = product => {
    this.setState({ selectedProduct: product });
  }

  render() {
    const {
      selectedProduct,
    } = this.state;

    return (
      <ProductContext.Consumer>
        { context => {
          return (
            <div className="container">
              <div className="products">
                <Products
                  products={context.products}
                  selectedProductId={this.state.selectedProduct.id}
                  onSelectProduct={(product) => this.onSelectProduct(product)} />
              </div>
            </div>
          );
        }}
      </ProductContext.Consumer>
    )
  }
}

// TODO: credit card
// {selectedProduct && (
//   <div className="creditcard">
//     <h1>{selectedProduct.title}</h1>
//
//     {!context.isCardOK && (
//       <CreditCard onCardCheck={context.onCardCheck} errorMessage={context.creditCardError} />
//     )}
//     {context.isCardOK && <Customer onBuy={context.onBuy} />}
//     {context.isTransactionAccepted && (
//       <div>
//         Congratulation! Transaction was accepted. Wait for an email.
//       </div>
//     )}
//     {context.transactionError && <div>{context.transactionError}</div>}
//   </div>
// )}
export default FetchingExample
