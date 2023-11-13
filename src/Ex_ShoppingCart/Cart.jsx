import React from 'react';
import CartItem from './CartItem';

export default function Cart({
  isOpen,
  onClose,
  carts,
  onChangeQty,
  onRemove,
}) {
  return (
    isOpen && (
      <>
        <div className="modal d-block" tabIndex={-1}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button type="button" className="btn-close" onClick={onClose} />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <th>Mã sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    {carts.map((product) => {
                      return (
                        <CartItem
                          product={product}
                          onChangeQty={onChangeQty}
                          onRemove={onRemove}
                          key={product.id}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show"></div>
      </>
    )
  );
}
