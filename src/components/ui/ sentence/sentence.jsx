import React from 'react';
import style from './sentence.module.css';

function Sentence(props) {
  return (
    <>
      <p
        className={
          props.available ? `${style.disable} ${style.text}` : `${style.text}`
        }
      >
        {props.text}
        {props.action && (
          <span className={style.action} href="0" onClick={props.onClick}>
            {props.action}
          </span>
        )}
      </p>
    </>
  );
}

export default Sentence;
