import React from 'react';
import ProductsList from '../pages/products-list/products-list';
import './style.css';

function PageWrapper() {
  return (
    <>
      <main className="page-wrapper__main">
        <ProductsList />
      </main>
    </>
  );
}

export default PageWrapper;
