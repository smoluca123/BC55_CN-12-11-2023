import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import data from './data.json';
import Cart from './Cart';

export default function ShoppingCart() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [carts, setCarts] = useState([]);
  const handleGetProduct = (product) => {
    setSelectedProduct(product);
  };
  const handleAddToCart = (product) => {
    const index = carts.findIndex((item) => item.id === product.id);
    if (index == -1) {
      setCarts([...carts, { ...product, quantity: 1 }]);
      console.log(carts);
      return;
    }
    const newCarts = [...carts];
    newCarts[index].quantity += 1;
    setCarts(newCarts);
  };
  const handleChangeQty = (id, qty) => {
    const index = carts.findIndex((item) => item.id === id);
    const newCarts = [...carts];

    newCarts[index].quantity += qty;
    if (newCarts[index].quantity < 0) {
      newCarts[index].quantity = 0;
    }
    setCarts(newCarts);
  };
  const handleRemoveCart = (id) => {
    const newCarts = carts.filter((item) => item.id !== id);
    setCarts(newCarts);
  };

  return (
    <div className="container">
      <h1 className="text-center text-primary">Bài tập giỏ hàng</h1>
      <div className="text-end">
        <button className="btn btn-danger" onClick={() => setIsOpen(!isOpen)}>
          Giỏ hàng
        </button>
      </div>
      <ProductList
        products={data}
        handleGetProduct={handleGetProduct}
        onAddToCart={handleAddToCart}
      />
      <hr />
      <ProductDetail product={selectedProduct} />
      <Cart
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        carts={carts}
        onChangeQty={handleChangeQty}
        onRemove={handleRemoveCart}
      />
    </div>
  );
}
