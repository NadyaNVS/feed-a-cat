import React from 'react';
import style from './productsList.module.css';
import ProductCard from '../../ui/product-card/productCard';

function ProductsList(props) {
  return (
    <div className={style.container}>
      {props.products?.length ? (
        <>
          <h1 className={style.title}>Did you feed the cat today?</h1>
          <ul className={style.productList}>
            {props.products.map((product) => (
              <li className={style.productItem} key={product.id}>
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
