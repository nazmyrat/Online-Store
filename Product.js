// src/components/Product.js
import React from 'react';

const Product = ({ name, price, imgSrc, onAddToCart }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <img src={imgSrc} alt={name} />
      <p>Price: ${price}</p>
      <button onClick={() => onAddToCart(name, price)}>Buy</button>
    </div>
  );
};

export default Product;
