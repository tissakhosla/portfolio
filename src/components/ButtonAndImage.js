import React from "react";
import "./Button.css";
import Button from './Button';
import ImageDiv from './ImageDiv';

const ButtonAndImage = (props) => {
  return (
    <div>
      <Button label={props.label}></Button>
      <ImageDiv source={props.source}></ImageDiv>
    </div>
  )
}

export default ButtonAndImage;