import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <header className='Header'>
      <p className='Header__h1'>{props.headerText}</p>
    </header>
  )
}

export default Header