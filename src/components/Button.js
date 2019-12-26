import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className='Button'>{props.label}</button>
  )
}

Button.defaultProps = {
  label: "click me"
};

export default Button;