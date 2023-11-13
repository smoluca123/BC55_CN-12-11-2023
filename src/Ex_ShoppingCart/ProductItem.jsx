import React from 'react';

export default function ProductItem({
  product,
  handleGetProduct,
  onAddToCart,
}) {
  const { name, img, price } = product;
  return (
    <div className="card mb-3">
      <img
        className="card-img-top"
        src={img}
        alt="Card image cap"
        height={400}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>{price}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            handleGetProduct(product);
          }}
        >
          Xem chi tiết
        </button>
        <button
          className="btn btn-primary"
          onClick={() => onAddToCart(product)}
        >
          Thêm giỏ hàng
        </button>
      </div>
    </div>
  );
}
