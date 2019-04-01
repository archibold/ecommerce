import React from 'react';
import { navigate, Link } from 'gatsby';
import { AuthProvider } from '../contexts/AuthProvider';
import Login from '../containers/Login';

const IndexPage = () => (
  <div>
    <AuthProvider>
      <Login />
    </AuthProvider>
  </div>
);

export default IndexPage;
