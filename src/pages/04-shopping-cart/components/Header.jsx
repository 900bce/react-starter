import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useProduct } from '../contexts/ProductContext';

function Header() {
  const { cart } = useProduct();

  return (
    <Nav>
      <h1>FOMO Shop</h1>
      <div>
        <Link to="/04" className="nav-link">
          瀏覽商品
        </Link>
        <Link to="/04/cart" className="nav-link">
          購物車({Object.keys(cart).length})
        </Link>
        <button className="nav-btn">帳戶</button>
      </div>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  padding: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;

  h1 {
    font-size: 25px;
  }

  .nav-btn {
    background-color: transparent;
    border: none;
    font-size: 16px;
  }

  .nav-link,
  .nav-btn {
    color: inherit;
    text-decoration: none;
    font-size: 16px;
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid #777;
    }
  }
`;
