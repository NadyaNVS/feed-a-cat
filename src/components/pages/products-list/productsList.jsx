import React from 'react';
import style from './productsList.module.css';
import ProductCard from '../../ui/product-card/productCard';

function ProductsList(props) {
  return (
    <div className={style.container}>
      {props.products?.length ? (
        <>
          <h1 className={style.title}>Have you fed your cat today?</h1>
          <ul className={style.productList}>
            {props.products.map((product, index) => (
              <li key={index} className={style.productItem}>
                <ProductCard {...product} />
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default ProductsList;
