import React from 'react';
import style from './productCard.module.css';
import { useState } from 'react';
import Sentence from '../ sentence/sentence';

function ProductCard({
  description,
  brand, // name of product
  taste, // taste of food
  portion, //portion quantity
  gift,
  feature,
  kilos,
  select,
  addition,
  disabled,
  over,
}) {
  const [active, setActive] = useState(false);
  // const [disabled, setDesabled] = useState(false);

  const hendelToggle = () => setActive(!active);

  return (
    <>
      <div className={style.productWrapper} onClick={hendelToggle}>
        <div
          className={`${style.productCard} ${
            active ? `${style.selected}` : ''
          } ${disabled ? `${style.disabled}` : ''}`}
        >
          <p>{description}</p>
          <h2>{brand}</h2>
          <h3>{taste}</h3>
          <span>
            <b>{portion}</b> {portion > 1 ? 'portions' : 'portion'}
          </span>
          <span>
            <b>{gift}</b> {gift > 1 ? 'mice' : 'mouse'} as a gift
          </span>
          <span>{feature}</span>
          <div className={style.weight}>
            {kilos}
            <span>kg</span>
          </div>
        </div>
        {active ? (
          <Sentence text={select} />
        ) : disabled ? (
          <Sentence text={over} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: addition }}></div>
        )}
        {/* {disabled && <Sentence text={over} />} */}
        {/* <Sentence key={index} text={select} /> */}
      </div>
    </>
  );
}

export default ProductCard;
