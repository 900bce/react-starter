import React from 'react'

function CartHeader() {
  return (
    <div className="cart-header">
      <div className="cart__column cart__column--1">商品</div>
      <div className="cart__column">名稱</div>
      <div className="cart__column">售價</div>
      <div className="cart__column">數量</div>
      <div className="cart__column">刪除</div>
      <div className="cart__column">小計</div>
    </div>
  );
}

export default CartHeader
