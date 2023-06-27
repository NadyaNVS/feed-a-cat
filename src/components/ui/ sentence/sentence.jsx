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
          <a className={style.action} href="0">
            {props.action}
          </a>
        )}
      </p>
    </>
  );
}

export default Sentence;
