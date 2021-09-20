import React from 'react';
import styled from 'styled-components';
import ProductBox from './ProductBox';
import ProductDetail from './ProductDetail';
import { useProduct } from '../contexts/ProductContext';

function ProductsList() {
  const { products, isModalOpen } = useProduct();

  return (
    <ProductsWrapper>
      <h1 className="title">新到貨</h1>
      <div className="product-container">
        {products.map((product) => (
          <ProductBox key={product.id} {...product} />
        ))}
      </div>
      {isModalOpen && <ProductDetail />}
    </ProductsWrapper>
  );
}

export default ProductsList;

const ProductsWrapper = styled.main`
  max-width: 1440px;
  margin: 0 auto;

  .title {
    text-align: center;
    font-weight: 300;
    margin-top: 2rem;
    letter-spacing: 3px;
    font-size: 2.5rem;
  }

  .product-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.5rem;
  }
`;
