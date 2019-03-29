import React, { Component } from 'react';
import Tab from '../components/tab';
import { AuthProvider, AuthContext } from '../contexts/AuthProvider';
class Layout extends Component {
  render = () => {
    return (
      <div>
        <AuthProvider>
          <AuthContext>
            {authContext => {
              return (
                <Tab>{authContext.isAuth? 'Add Product / View Profile' : 'Login / Register'}</Tab>
              );
            }}
          </AuthContext>
        </AuthProvider>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
