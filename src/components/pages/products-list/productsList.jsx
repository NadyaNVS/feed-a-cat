import React, { useState } from 'react';
import style from './productsList.module.css';
import ProductCard from '../../ui/product-card/productCard';

function ProductsList(props) {
  const [selectedFilter, setSelectedFilter] = useState([0]);

  const productOnClick = (product) => {
    selectedFilter.includes(product)
      ? removeProduct(product)
      : setProduct(product);
  };

  const setProduct = (product) => {
    setSelectedFilter([...selectedFilter, product]);
  };

  const removeProduct = (product) => {
    const index = selectedFilter.findIndex((prod) => prod === product);
    selectedFilter.splice(index, 1);
    setSelectedFilter([...selectedFilter]);
  };

  return (
    <div className={style.container}>
      {props.products?.length ? (
        <>
          <h1 className={style.title}>Did you feed the cat today?</h1>
          <ul className={style.productList}>
            {props.products.map((product, index) => (
              <li key={index} className={style.productItem}>
                <ProductCard
                  className={`${
                    selectedFilter.includes(product) ? style.selected : ''
                  }`}
                  onClick={() => productOnClick(product)}
                  {...product}
                />
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default ProductsList;
