import React from 'react';
import { useProduct } from '../contexts/ProductContext';

function CartItem({ item }) {
  const { cartDecrement, cartIncrement, removeItem } = useProduct();

  return (
    <div className="cart-item">
      <div className="cart__column cart__column--1">
        <img src={item.img} alt="item" />
      </div>
      <div className="cart__column">{item.title}</div>
      <div className="cart__column">{item.price}</div>
      <div className="cart__column">
        <button className="btn-count" onClick={() => cartDecrement(item.id)}>
          -
        </button>
        <span className="btn-count">{item.count}</span>
        <button className="btn-count" onClick={() => cartIncrement(item.id)}>
          +
        </button>
      </div>
      <div className="cart__column">
        <img
          src="https://cdn0.iconfinder.com/data/icons/interface-line-4/48/Recycle_bin_trash_garbage-512.png"
          alt="delete"
          className="btn-del"
          onClick={() => removeItem(item.id)}
        />
      </div>
      <div className="cart__column">{item.total}</div>
    </div>
  );
}

export default CartItem;
