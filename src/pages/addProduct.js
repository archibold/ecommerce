import React from 'react';
import { AuthProvider } from '../contexts/AuthProvider';
import Login from '../containers/Login';

const AddProductPage = () => (
  <div>
    <AuthProvider>
      <Login />
    </AuthProvider>
  </div>
);

export default AddProductPage;
