import React from 'react';
import styled from 'styled-components';
import { useProduct } from '../contexts/ProductContext';

function ProductBox(productData) {
  const { addToCart, handleDetail, openModal } = useProduct();

  const addProductToCart = (e) => {
    if (!productData.id) {
      return;
    }
    e.stopPropagation();
    addToCart(productData.id);
  };

  const setDetail = () => {
    if (!productData.id) {
      return;
    }
    handleDetail(productData.id);
    openModal();
  };

  return (
    <ProductBoxContainer onClick={setDetail}>
      <div product-id={productData.id}>
        <div className="product-image-wrap">
          <img src={productData.img} alt="product" />
        </div>
        <div className="product-body">
          <div>
            <p className="product-title">{productData.title}</p>
            <p className="product-price">${productData.price}</p>
          </div>
          <button className="product-add-cart" onClick={addProductToCart}>
            <img
              src={
                productData.inCart ? 'https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami6-31-512.png' : 'https://cdn4.iconfinder.com/data/icons/online-shopping-glyph-part-1/33/add_cart-512.png'
              }
              alt="add to cart"
            />
          </button>
        </div>
      </div>
    </ProductBoxContainer>
  );
}

export default ProductBox;

const ProductBoxContainer = styled.div`
  width: 300px;
  height: 400px;
  margin: 20px;
  box-shadow: 3px 3px 10px #ddd;
  transition: 0.3s;
  cursor: zoom-in;

  &:hover {
    box-shadow: 3px 3px 10px #aaa;

    .product-image-wrap {
      padding: 8px;
    }
  }

  .product-image-wrap {
    width: 100%;
    height: 300px;
    padding: 10px;
    transition: 0.3s;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .product-body {
    padding: 15px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
  }

  .product-title {
    font-size: 18px;
    font-weight: 500;
  }

  .product-add-cart {
    align-self: flex-end;
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
