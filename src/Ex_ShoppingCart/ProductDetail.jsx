import React from 'react';

export default function ProductDetail({ product }) {
  return (
    product && (
      <div className="row">
        <div className="col-4">
          <h3>{product.name}</h3>
          <img
            className="card-img"
            src={product.img}
            alt={product.name}
            height={400}
          />
        </div>
        <div className="col-8">
          <h3>Thông tin sản phẩm</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn Hình : </td>
                <td>{product.display}</td>
              </tr>
              <tr>
                <td>OS : </td>
                <td>{product.os}</td>
              </tr>
              <tr>
                <td>Camera : </td>
                <td>{product.camera}</td>
              </tr>
              <tr>
                <td>Ram : </td>
                <td>{product.ram}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  );
}
