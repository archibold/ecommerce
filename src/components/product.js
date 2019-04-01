import React from 'react';
import { Link } from 'gatsby';
import Button from './button';
import Input from './input';
import './styles.css';

const Product = ({
  title,
  description,
  price,
  image,
  isSelected,
  onSelect,
  onChange,
}) => (
  <div
    onClick={ onSelect }
    className={ isSelected ? 'productcomponent is-selected' : 'productcomponent' }
  >
    <img src={ image } />
    <h3>{ title }</h3>
    <p>{ description }</p>
  </div>
);

export default Product;
