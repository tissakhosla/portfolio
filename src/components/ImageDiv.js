import React from 'react';
import './ImageDiv.css'

const imageDiv = (props) => {
  let classList = `ImageDiv-${props.item}`
   console.log(props.item)
  return (
    <div className={classList} alt={props.altText} style={{backgroundImage: `url(${props.source})`}}></div>
  )
}

export default imageDiv;