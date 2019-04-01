import React from 'react';
import { Link } from 'gatsby';
import { AuthProvider } from '../contexts/AuthProvider';
import FetchingProducts from '../containers/FetchingProducts';

const IndexPage = () => (
  <div>
    <AuthProvider>
      Nothing here yet...
    </AuthProvider>
  </div>
);

export default IndexPage;
