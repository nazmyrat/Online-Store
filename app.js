import React, { useState } from 'react';
import ProductList from './ProductList';
import './app.css';

function App() {
    const [products] = useState([
        { name: 'Chanel Bag', price: 5000, image: 'imagess/chanel-bag.JPG' },
        { name: 'Dior Lipstick', price: 40, image: 'imagess/dior-lipstick.JPG' },
        { name: 'YSL Shoes', price: 1200, image: 'imagess/ysl-shoes.JPG' }
    ]);

    const handleBuy = (product) => {
        const confirmed = window.confirm(`Вы уверены, что хотите купить ${product.name} за $${product.price}?`);
        if (confirmed) {
            alert(`Вы купили ${product.name} за $${product.price}!`);
        } else {
            alert(`Покупка ${product.name} отменена.`);
        }
    };

    return (
        <div className="store-container">
            <h1>Store Products</h1>
            <ProductList products={products} onBuy={handleBuy} />
        </div>
    );
}

export default App;
