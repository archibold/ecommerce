import React from 'react';
import {Link} from 'gatsby';
import './styles.css';

const Button = ({children, onClick}) => (
  <div className="button">
    <button onClick={onClick}>{children}</button>
  </div>
)

export default Button;
