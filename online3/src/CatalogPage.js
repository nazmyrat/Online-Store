// src/pages/CatalogPage.js
import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const CatalogPage = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const handleAddToCart = (name, price) => {
    const updatedCart = [...cart, { name, price }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h1>Store Products</h1>
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
};

export default CatalogPage;
