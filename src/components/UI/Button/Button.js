import React from 'react';
import classes from './Button.module.css';

// התגית אשר קוראת לראפר הזה  = props
const Button123 = (props) => {
  return (
    <button className={classes.button} type={props.type || "button" } onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button123;
