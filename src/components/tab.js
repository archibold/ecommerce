import React from 'react';
import { Link } from 'gatsby';
import fire from '../images/fire.svg';
const Tab = ({ children }) => {
  return (
    <div className="tab-container">
      <img src={ fire } height={ 50 }/> <Link to='/'>Shop</Link>
        <div className="tab-action">
          { children }
        </div>
    </div>
  );
};

export default Tab;
