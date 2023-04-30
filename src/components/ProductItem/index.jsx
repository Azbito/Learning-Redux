import React from 'react'
import './styles.scss'

export default function ProductItem({ name, price, img, alt, key, quantity }) {
  return (
    <div id={key} className="product-item-container">
      <img src={img} alt={alt} />
      <p>{name}</p>
      <p>{price}</p>
      <p>{quantity}</p>
    </div>
  )
}
