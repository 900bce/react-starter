import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useProduct } from '../contexts/ProductContext';

function ProductDetail() {
  const { detailProduct, addToCart, closeModal } = useProduct();
  const { id, title, price, quantity, inCart, info, img } = detailProduct;
  return (
    <DetailContainer>
      <button className="close-modal" onClick={closeModal}>
        &#10005;
      </button>
      <div className="img-container">
        <img src={img} alt="商品圖片" className="detail__img" />
      </div>
      <div className="detail__text">
        <h1 className="detail__title">{title}</h1>
        <h3>售價: ${price}</h3>
        <h3>庫存: {quantity}</h3>
        <div className="buttons">
          <Link to="/">
            <StyledButton className="btn-back" onClick={closeModal}>
              繼續購物
            </StyledButton>
          </Link>
          <StyledButton
            disabled={inCart ? true : false}
            className="btn-cart"
            onClick={() => {
              addToCart(id);
              closeModal();
            }}
          >
            {inCart ? '已加入' : '加入購物車'}
          </StyledButton>
        </div>
        <div className="detail__info">
          <p>{info}</p>
        </div>
      </div>
    </DetailContainer>
  );
}

export default ProductDetail;

const DetailContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 700px;
  max-height: 100vh;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 3rem;
  display: flex;
  justify-content: center;
  overflow: scroll;

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    font-size: 30px;
    cursor: pointer;
  }

  .img-container {
    padding: 1rem 3rem;
    max-width: 70%;
  }

  .detail__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .detail__text {
    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    h3 {
      font-weight: 300;
    }

    .buttons {
      margin: 1rem 0;
    }

    .detail__info {
      max-width: 30rem;
    }
  }
`;

const StyledButton = styled.button`
  padding: 0.2rem 0.5rem;
  margin-right: 0.5rem;
  background: transparent;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid #2a2a72;

  &:focus {
    outline: none;
  }
`;
