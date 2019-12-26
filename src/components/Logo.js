import React from 'react';
import './Logo.css'

const Logo = (props) => {
  return (
    <div className='Logo'>
      <a target='_blank' className='Logo__link' href={props.url}>
        <img className='Logo__pic' src={props.image}></img>
      </a>
    </div>
  )
}

export default Logo;