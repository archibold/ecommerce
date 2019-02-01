import React from 'react'
import { Link } from 'gatsby'
import Button from './button'
import Input from './input'
import './styles.css'

const Product = ({
  title,
  description,
  price,
  isSelected,
  onSelect,
  onChange,
}) => (
  <div
    onClick={onSelect}
    className={isSelected ? 'productcomponent is-selected' : 'productcomponent'}
  >
    <div> Image</div>
    <h1>{title}</h1>
    <p>{description}</p>
    <Input label={price + ' PLN'} onChange={onChange} />
  </div>
)

export default Product
