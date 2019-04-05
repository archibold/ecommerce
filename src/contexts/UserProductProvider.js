import React from 'react';
import { getUserProducts, addNewProduct } from '../service/user-service';

export const UserProductContext = React.createContext();

export class UserProductProvider extends React.Component {
  state = {
    products: [],
  }

  constructor(props) {
    super(props);

    getUserProducts()
      .then(products => this.setState({ products: products }) );
  }

  addNewProduct = (product) => {
    addNewProduct.then((product) => {
      const products = this.state.products;
      products.push(product);
      this.setState({products: products});
    });
  }

  render() {
    return (
      <UserProductContext.Provider
        value={{
          products: this.state.products,
          onAddNewProduct: addNewProduct,
        }}
      >
        { this.props.children }
      </UserProductContext.Provider>
    );
  }
}
