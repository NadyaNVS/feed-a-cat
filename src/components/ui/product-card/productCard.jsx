import React from 'react';
import style from './productCard.module.css';

function ProductCard({
  description,
  brand, // name of product
  taste, // taste of food
  portion, //portion quantity
  gift,
  feature,
  kilos,
}) {
  return (
    <div className={style.productCard}>
      <p>{description}</p>
      <h2>{brand}</h2>
      <h3>{taste}</h3>
      <span>
        <b>{portion}</b> portion
      </span>
      <span>
        <b>{gift}</b> as a gift
      </span>
      <span>{feature}</span>
      <div className={style.weight}>
        {kilos}
        <span>kg</span>
      </div>
    </div>
  );
}

export default ProductCard;
