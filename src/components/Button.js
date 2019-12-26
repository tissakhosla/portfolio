import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className='Button__main'>{props.label}</button>
  )
}


export default Button;