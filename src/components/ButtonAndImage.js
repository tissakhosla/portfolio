import React from "react";
import "./Button.css";
import Button from './Button'

const Button = (props) => {
  return (
    <button className='Button'>{props.label}</button>
    <img></img>
  )
}

Button.defaultProps = {
  label: "click me"
};

export default Button;