import React from 'react';
import Product from './product';

const Products = ({ products, selectedProductId, onSelectProduct }) => products.map((product, index) => {
  return (
    <Product
      key={ index }
      title={ product.title }
      description={ product.description }
      price={ product.price }
      image={ product.image }
      isSelected={ selectedProductId === product.id }
      onSelect={ () => onSelectProduct(product) }
    />
);
});

export default Products;
