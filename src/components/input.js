import React from 'react'
import { Link } from 'gatsby'
import './styles.css'

const Input = ({ value, onChange, label, error }) => (
  <div className="input">
    <p>{label}</p>
    <input
      placeholder={label}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
)

export default Input
