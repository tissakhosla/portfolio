import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <a target="_blank" href={props.link}><button className='Button__main'>{props.label}</button></a>
  )
}


export default Button;