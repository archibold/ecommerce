import React from 'react';
import { Link } from 'gatsby';
import { AuthContext } from '../contexts/AuthProvider';
import Register from '../containers/Register';

const SignUp = () => (
  <div>
    <AuthContext.Consumer>
      { authContext => {
        if (!authContext.isAuth && !authContext.isRegistred) return <Register onRegister={authContext.onRegister}/>
        if (authContext.isAuth) return <div>Logged in...</div>

        return (
          <div>The account has been created. Try to <Link to="/sign-in">Log in</Link></div>
        );
      }}
    </AuthContext.Consumer>
  </div>
);

export default SignUp;
