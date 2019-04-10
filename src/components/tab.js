import React from 'react';
import { Link } from 'gatsby';
import fire from '../images/fire.svg';
const Tab = ({ children }) => {
  return (
    <div className="tab-container">
        <Link to='/' className="tab-logo"></Link>
        <div className="tab-action">
          <button className="tab-menu"></button>
          <div className="tab-links">
            { children }
          </div>
        </div>
    </div>
  );
};

export default Tab;
