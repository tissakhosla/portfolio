import React from 'react';

const ImageOverlay = (props) => {
  console.log(props)
    return (
      <div className='ImageOverlay'>
        <a className='ImageOverlay__link'>SiMone</a>
        <a className='ImageOverlay__link'>Bikes!</a>
        <a className='ImageOverlay__link'>Spotify Favorites</a>
        <a className='ImageOverlay__link'>CoTripper</a>
      </div>
    )
} 

export default ImageOverlay