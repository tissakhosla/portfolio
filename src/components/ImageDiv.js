import React from 'react';
import './ImageDiv.css'

const imageDiv = (props) => {
  let classList = `ImageDiv-${props.item}`
   console.log(props.item)
  return (
    <img className={classList} alt={props.altText} src={props.source}></img>
  )
}

export default imageDiv;