import React from 'react';

export default function ShoeItem({ data: { image, name, price } }) {
  //   const { id, image, name, price } = data;
  return (
    <>
      <div className="card text-start">
        <img className="card-img-top" src={image} alt={name} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">
            <p>{price}$</p>
            <button className="btn btn-dark">Add to cart</button>
          </p>
        </div>
      </div>
    </>
  );
}
