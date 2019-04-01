import React from 'react';
import fire from '../images/fire.svg';
const Tab = ({ children }) => {
  return (
    <div className="tab-container">
      <img src={ fire } height={ 50 }/> Shop
        <div className="tab-action">
          { children }
        </div>
    </div>
  );
};

export default Tab;
