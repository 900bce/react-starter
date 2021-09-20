import React from 'react';
import styled from 'styled-components';
import CartHeader from './CartHeader';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { useProduct } from '../contexts/ProductContext';

function Cart() {
  const { cart } = useProduct();
  return (
    <CartWrapper>
      <h1 className="title">購物車</h1>
      {Object.keys(cart).length > 0 ? (
        <div className="cart-container">
          <CartHeader />
          <CartList />
          <CartTotal />
        </div>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '50px', fontSize: '24px' }}>
          購物車是空的
        </p>
      )}
    </CartWrapper>
  );
}

export default Cart;

const CartWrapper = styled.main`
  max-width: 1440px;
  margin: 0 auto;

  .title {
    text-align: center;
    font-weight: 300;
    margin-top: 2rem;
    letter-spacing: 3px;
    font-size: 2.5rem;
  }

  .cart-container {
    padding: 3rem;
    margin: 0 auto;
    text-align: center;
  }

  .cart-header,
  .cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .cart-header {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
  }

  .cart__column {
    width: 20%;

    .btn-del {
      width: 22px;
      height: 22px;
      cursor: pointer;
    }

    img {
      width: 100%;
    }

    &--1 {
      max-width: 5rem;
    }
  }

  .btn-count {
    border: 1px solid #000;
    padding: 0.5rem;
    font-size: 0.8rem;
    margin: 2px;

    &:hover {
      color: #fff;
      background: #000;
    }
  }

  .cart-total {
    font-size: 1.2rem;
    margin: 1rem;
  }

  .checkout {
    margin: 1rem;
    padding: 0.2rem 0.5rem;
    background: transparent;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid #2a2a72;
    color: #2a2a72;
    text-decoration: none;

    &:focus {
      outline: none;
    }
  }
`;
