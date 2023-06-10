import React from 'react';
import style from './productCard.module.css';
import { useState } from 'react';
import Sentence from '../ sentence/sentence';

function ProductCard({
  description,
  question,
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
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const hendelToggle = () => setActive(!active);

  return (
    <div
      className={style.productWrapper}
      onClick={hendelToggle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        className={`${style.productCard} ${active ? `${style.selected}` : ''} ${
          disabled ? `${style.disabled}` : ''
        }`}
      >
        {active && isHovering ? (
          <p className={style.question}>{question}</p>
        ) : (
          <p>{description}</p>
        )}
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
      <div>
        {active ? (
          <Sentence text={select} />
        ) : disabled ? (
          <Sentence text={over} />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: addition }}></p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
