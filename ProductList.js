import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, onBuy }) {
    return (
        <div className="products">
            {products.map((product) => (
                <ProductCard key={product.name} product={product} onBuy={onBuy} />
            ))}
        </div>
    );
}

export default ProductList;
