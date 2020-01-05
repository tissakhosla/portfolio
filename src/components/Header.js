import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <header className='Header__h1'>{props.headerText}</header>
  )
}

export default Header