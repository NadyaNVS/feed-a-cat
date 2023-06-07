import React from 'react';
import ProductsList from '../pages/products-list/productsList';
import style from './pageWrapper.module.css';

function PageWrapper(props) {
  return (
    <>
      <main className={style.pageWrapper}>
        <ProductsList products={props.products} />
      </main>
    </>
  );
}

export default PageWrapper;
