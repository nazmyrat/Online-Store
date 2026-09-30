import React from 'react';

function ProductCard({ product, onBuy }) {
    return (
        <div className="product">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>Price: ${product.price}</p>
            <button onClick={() => onBuy(product)}>Buy</button>
        </div>
    );
}

export default ProductCard;
