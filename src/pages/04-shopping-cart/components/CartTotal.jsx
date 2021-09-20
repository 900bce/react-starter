import React from 'react';
import { Link } from 'react-router-dom';
import { useProduct } from '../contexts/ProductContext';

function CartTotal() {
  const { cartTotal } = useProduct();
  return (
    <>
      <div className="cart-total">總計：＄{cartTotal}</div>
      <Link to="/" className="checkout">
        結帳去 &rarr;
      </Link>
    </>
  );
}

export default CartTotal;
