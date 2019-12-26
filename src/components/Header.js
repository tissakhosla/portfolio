import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <header className='Header'>
      <h1 className='Header__h1'>{props.headerText}</h1>
    </header>
  )
}

export default Header