import React from 'react';

export default function Product({ data, onClick }) {
  const { name, brand, price } = data;
  return (
    <div className="alert alert-primary">
      <h3>Name : {name}</h3>
      <p>Brand : {brand}</p>
      <p>Price : {price}</p>
      <button onClick={() => onClick(data)} className="btn btn-success">
        Select
      </button>
    </div>
  );
}
