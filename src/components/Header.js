import React from 'react'
import './Header.css'

import Typewriter from './Typewriter'

const Header = (props) => {
  return (
    <header className='Header__h1'>
      <Typewriter text="Print this please"></Typewriter>
    </header>
  )
}

export default Header