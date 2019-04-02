import React from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import Login from '../containers/Login';

const SignInPage = () => (
  <div>
    <AuthContext.Consumer>
      { authContext => {
        if (!authContext.isAuth) return <Login onLogin={authContext.onLogin}/>

        return (
          <div>Logged in...</div>
        );
      }}
    </AuthContext.Consumer>
  </div>
);

export default SignInPage;
