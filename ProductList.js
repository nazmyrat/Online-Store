// src/components/ProductList.js
import React from 'react';
import Product from './Product';

const ProductList = ({ onAddToCart }) => {
  const products = [
    { name: 'Chanel Bag', price: 5000, imgSrc: '/imagess/chanel-bag.JPG' },
    { name: 'Dior Lipstick', price: 40, imgSrc: '/imagess/dior-lipstick.JPG' },
    { name: 'YSL Shoes', price: 1200, imgSrc: '/imagess/ysl-shoes.JPG' },
  ];

  return (
    <div className="products">
      {products.map((product, index) => (
        <Product key={index} {...product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
