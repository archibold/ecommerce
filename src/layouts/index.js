import React, { Component } from 'react';
import { Link } from 'gatsby';
import Tab from '../components/tab';
import { AuthProvider, AuthContext } from '../contexts/AuthProvider';
class Layout extends Component {
  render = () => {
    return (
      <div>
        <AuthProvider>
          <AuthContext>
            { authContext => {
              return (
                <Tab>
                  { authContext.isAuth &&
                    <div>
                      <Link to='/your-products'>Your Products</Link>
                      <Link to='/your-profile'>Your Profile</Link>
                      <Link to='/#' onClick={authContext.onLogout}>Logout</Link>
                    </div> }
                  { !authContext.isAuth &&
                    <div>
                      <Link to='/sign-in'>Login</Link>
                      <Link to='/sign-up'>Register</Link>
                    </div> }
                </Tab>
              );
            }}
          </AuthContext>
        { this.props.children }
        </AuthProvider>
      </div>
    )
  }
}

export default Layout;
