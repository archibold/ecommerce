import React, { Component } from 'react';
import Product from '../components/product';
import CreditCard from '../components/creditcard';
import Customer from '../components/customer';
import Products from '../components/products';
import Input from '../components/input';
import Button from '../components/button';
import { UserProductContext } from '../contexts/UserProductProvider';

class UserProducts extends Component {
  state = {
    title: '',
    price: '',
    description: '',
    image: null
  }
  onChange = (input, value) => this.setState({ [input]: value })

  onImageChange = (input) => {
    if (input) {
      const { onChange } = this;
      var reader = new FileReader();
      reader.readAsDataURL(input);
      reader.onload = function (e) {
        onChange('image', e.target.result);
      }
    }
  }

  onAddProduct = () => {

  }

  render() {
    const { title, description, image, price } = this.state;
    const { onChange, onImageChange, onAddProduct } = this;

    return (
      <UserProductContext.Consumer>
        { context => {
          return (
            <div>
              ...list of user products...
              <Input label="title" value={ title } onChange={ value => onChange('title', value) }/>
              <Input label="price" value={ price } onChange={ value => onChange('price', value) }/>
              <img src={image} height={150}/>
              <Input type="file" label="image" onChange={ onImageChange }/>
              <Input label="description" value={ description } onChange={ value => onChange('description', value) }/>
              <Button onClick={ onAddProduct }>Add new product</Button>
            </div>
          );
        }}
      </UserProductContext.Consumer>
    )
  }
}

export default UserProducts;
