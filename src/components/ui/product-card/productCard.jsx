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
  picture,
  alt,
  kilos,
  select,
  defaultText,
  available,
  over,
}) {
  const [active, setActive] = useState(false);
  const [isHoverCard, setIsHoverCard] = useState(false);
  const [isHoverEnable, setIsHoverEnable] = useState(true);

  const handleMouseOver = () => {
    setIsHoverCard(true);
  };
  const handleMouseOut = () => {
    if (!isHoverEnable) {
      setIsHoverEnable(true);
    }
    setIsHoverCard(false);
  };

  const hendelToggle = () => {
    available && setActive(!active);
    setIsHoverEnable(false);
  };

  const border = (
    <svg width="320" height="100%" xmlns="http://www.w3.org/2000/svg">
      <mask id="a" fill="#fff">
        <path d="M0 42.676V468c0 6.627 5.373 12 12 12h296c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12H42.676L0 42.676Z" />
      </mask>
      <path
        d="m0 42.676-2.828-2.828L-4 41.019v1.657h4ZM42.676 0v-4H41.02l-1.171 1.172L42.676 0ZM4 468V42.676h-8V468h8Zm8 8a8 8 0 0 1-8-8h-8c0 8.837 7.163 16 16 16v-8Zm296 0H12v8h296v-8Zm8-8a8 8 0 0 1-8 8v8c8.837 0 16-7.163 16-16h-8Zm0-456v456h8V12h-8Zm-8-8a8 8 0 0 1 8 8h8c0-8.837-7.163-16-16-16v8ZM42.676 4H308v-8H42.676v8Zm-2.828-6.828L-2.828 39.848l5.656 5.657L45.505 2.828l-5.657-5.656Z"
        mask="url(#a)"
      />
    </svg>
  );

  return (
    <div>
      <div
        onClick={hendelToggle}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseOut}
        className={`${style.productCard} ${active ? `${style.selected}` : ''} ${
          !available ? `${style.disabled}` : ''
        }`}
      >
        {border}
        <div className={style.contentWrapper}>
          {isHoverEnable && active && isHoverCard ? (
            <p className={style.question}>{question}</p>
          ) : (
            <p>{description}</p>
          )}
          <h2>{brand}</h2>
          <h3>{taste}</h3>
          <span className={style.discription}>
            <b>{portion}</b> {portion > 1 ? 'portions' : 'portion'}
          </span>
          <span className={style.discription}>
            <b>{gift}</b> {gift > 1 ? 'mice' : 'mouse'} as a gift
          </span>
          {feature > 1 ? <span>{feature}</span> : null}
        </div>
        <img
          src={picture}
          alt={alt}
          width={320}
          height={272}
          className={style.cardImage}
        />
        <div className={style.weight}>
          {kilos}
          <span>kg</span>
        </div>
      </div>

      <div>
        {active ? (
          <Sentence text={select} />
        ) : !available ? (
          <Sentence text={over} />
        ) : (
          <p>
            {defaultText} <a href="0">buy</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
