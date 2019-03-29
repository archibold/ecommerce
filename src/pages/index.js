import React from 'react';
import { Link } from 'gatsby';
import { ProductProvider } from '../contexts/ProductProvider';
import FetchingProducts from '../containers/FetchingProducts';

const IndexPage = () => (
  <div>
    <ProductProvider>
      <FetchingProducts />
    </ProductProvider>
  </div>
);

export default IndexPage;
