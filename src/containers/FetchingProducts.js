import React, { Component } from 'react';
import Product from '../components/product';
import '../service/buy-service';
import CreditCard from '../components/creditcard';
import Customer from '../components/customer';
import { checkCard, onBuyProduct } from '../service/buy-service';
import { withFirebase } from '../components/FirebaseContext'

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
    const { firebase } = this.props
    firebase
      .database()
      .ref('/products')
      .once('value')
      .then(snapshot => {
        this.setState({
          products: snapshot.val(),
        })
      })
  }

  onSelectProduct = (product) => {
    this.setState({selectedProduct: product})
  }

  onCardCheck = (cc) => {
    this.setState({ccError: null})

    checkCard(cc)
    .then(result => {
        if(!result.success) {
          this.setState({ccError: result.error.error_description})
        } else {
          this.setState({token: result.token})
        }
    })
  }

  onBuy = (customer) => {
    const { selectedProduct, token } = this.state;
    this.setState({
      transactionAccepted: false,
      transactionError: false
    });

    onBuyProduct(customer, selectedProduct, token)
    .then(result => {
      if(result.success) {
        this.setState({transactionAccepted: true});
      } else {
        this.setState({transactionError: result.error.error_description})
      }
    })
  }

  render() {
    const { products, ccError, customerError, token, selectedProduct, transactionAccepted, transactionError } = this.state
    const { onCardCheck, onBuy, onSelectProduct } = this;

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
          isSelected={selectedProduct && selectedProduct.id === product.id}
          onSelect={() => onSelectProduct(product)}
        />
      )
    })

    return (
      <div className="container">
        <div className="products">
          {productsComponet}
        </div>
        <div className="creditcard">
          {selectedProduct && !token && <CreditCard onCardCheck={onCardCheck} errorMessage={ccError}/>}
          {token && <Customer onBuy={onBuy} errorMessage={customerError}/>}
          {transactionAccepted && <div>Congratulation! Transaction was accepted. Wait for an email.</div>}
          {transactionError && <div>{transactionError}</div>}
        </div>
      </div>
    )
  }
}

export default withFirebase(FetchingExample)
