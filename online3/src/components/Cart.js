// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.name}</span>
          <span>${item.price}</span>
        </div>
      ))}
      <p>Total: ${totalAmount}</p>
    </div>
  );
};

export default Cart;
