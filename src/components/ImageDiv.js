import React from 'react';

const imageDiv = (props) => {
  return (
    <div className='ImageDiv' style={{ backgroundImage: `url(${props.source})` }}></div>
  )
}

export default imageDiv;