import React from "react";
import "./Button.css";
import Button from './Button';
import ImageDiv from './ImageDiv';
import './ButtonAndImage.css';

const ButtonAndImage = (props) => {
  return (
    <div className='ButtonAndImage'>
      <Button link={props.link} label={props.label}></Button>
      <ImageDiv altText={props.altText} item={props.item} source={props.source}></ImageDiv>
    </div>
  )
}

export default ButtonAndImage;