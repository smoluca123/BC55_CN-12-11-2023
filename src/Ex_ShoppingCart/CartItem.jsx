import React from 'react';

export default function CartItem({ product, onChangeQty, onRemove }) {
  return (
    <tr className="text-center">
      <td>{product.id}</td>
      <td>
        <img src={product.img} alt={product.name} height={100} />
      </td>
      <td>{product.name}</td>
      <td>
        <button
          className="btn btn-danger me-2"
          onClick={() => {
            onChangeQty(product.id, -1);
          }}
        >
          -
        </button>
        {product.quantity}
        <button
          className="btn btn-primary ms-2"
          onClick={() => {
            onChangeQty(product.id, 1);
          }}
        >
          +
        </button>
      </td>
      <td>{product.price}</td>
      <td>{product.price * product.quantity}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            onRemove(product.id);
          }}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
}
