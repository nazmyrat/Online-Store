// src/pages/CartPage.js
import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
