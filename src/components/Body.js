import React from 'react'
import Header from './Header'
import Main from './Main'
import './Body.css'

const Body = () => {
  return (
    <div className='Body'>
      <Header headerText={`Tissa Khosla - Software Development`}></Header>
      <Main></Main>
    </div>
  )
}

export default Body;