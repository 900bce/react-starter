import React from 'react';
import { useProduct } from '../contexts/ProductContext';
import CartItem from './CartItem';

function CartList() {
  const { cart } = useProduct();
  const cartItems = Object.values(cart);
  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default CartList;
