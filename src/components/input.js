import React from 'react';
import { Link } from 'gatsby';
import './styles.css';

const Input = ({ value, onChange, label, error, type }) => {
  return (
    <div className="input">
      <p>{ label }</p>
      <input
        type={ type }
        placeholder={ label }
        value={ value }
        onChange={ e => {
          if( type == 'file') {
            console.log(e.target.files[0])
            onChange(e.target.files[0])
          } else {
            onChange(e.target.value);
          }
        }}
        />
    </div>
  );
}

export default Input;
