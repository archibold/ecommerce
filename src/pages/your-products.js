import React from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { UserProductProvider } from '../contexts/UserProductProvider';
import Login from '../containers/Login';
import UserProducts from '../containers/UserProducts';

const AddProductPage = () => (
  <div>
    <AuthContext.Consumer>
      { authContext => {
        if (!authContext.isAuth) return <Login onLogin={authContext.onLogin}/>

        return (
          <div>
            <UserProductProvider>
              <UserProducts />
            </UserProductProvider>
          </div>
        );
      }}
    </AuthContext.Consumer>
  </div>
);

export default AddProductPage;
