import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div className='Header__div'>
      <div className='typewriter-text'>{props.headerText}</div>
      </div>
  )
}

export default Header