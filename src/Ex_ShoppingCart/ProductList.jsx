import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({
  products,
  handleGetProduct,
  onAddToCart,
}) {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-4" key={product.id}>
          <ProductItem
            product={product}
            handleGetProduct={handleGetProduct}
            onAddToCart={onAddToCart}
          />
        </div>
      ))}
    </div>
  );
}
