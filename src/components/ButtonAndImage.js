import React from "react";
import "./Button.css";
import Button from './Button';
import ImageDiv from './ImageDiv';
import './ButtonAndImage.css';

const ButtonAndImage = (props) => {
  return (
    <div className='ButtonAndImage'>
      <Button label={props.label}></Button>
      <ImageDiv item='resumePic' source={props.source}></ImageDiv>
    </div>
  )
}

export default ButtonAndImage;