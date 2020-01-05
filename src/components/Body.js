import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './Body.css'

const Body = () => {
  return (
    <div className='Body'>
      <Header headerText={`| tissa khosla | software development |`}></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default Body;