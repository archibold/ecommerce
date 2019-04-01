import React from 'react';
import { AuthProvider } from '../contexts/AuthProvider';
import Login from '../containers/Login';

const SignInPage = () => (
  <div>
    <AuthProvider>
      <Login />
    </AuthProvider>
  </div>
);

export default SignInPage;
