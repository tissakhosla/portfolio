import React from 'react';
import './ImageDiv.css'

const imageDiv = (props) => {
  return (
    <div className='ImageDiv' style={{ backgroundImage: `url(${props.source})` }}></div>
  )
}

export default imageDiv;