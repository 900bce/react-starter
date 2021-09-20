import React from 'react';
import Layout from './components/Layout';
import { ProductProvider } from './contexts/ProductContext';
import { UserProvider } from './contexts/UserContext';

function Shopping() {
  return (
    <UserProvider>
      <ProductProvider>
        <Layout />
      </ProductProvider>
    </UserProvider>
  );
}

export default Shopping;
