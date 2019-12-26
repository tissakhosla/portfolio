import React from 'react';
import './ImageDiv.css'

const imageDiv = (props) => {
  let classList = `ImageDiv-${props.item}`
  return (
    <img className={classList} alt='Picture of 8 year old Tissa at a computer' src={props.source}></img>
  )
}

export default imageDiv;