import React from 'react';
import style from './sentence.module.css';

function Sentence(props) {
  return (
    <>
      <p className={style.text}>{props.text}</p>
    </>
  );
}

export default Sentence;
