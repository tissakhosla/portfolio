import React from 'react';
import './Main.css';
import ButtonAndImage from './ButtonAndImage'
import youngTissa from '../assets/atTheComputer.png'

const Main = () => {
  return (
    <div className='Main'>
      <ButtonAndImage label='Resume' source={youngTissa}></ButtonAndImage>
      <ButtonAndImage label='Projects' source={youngTissa}></ButtonAndImage>
      <ButtonAndImage label='Writing' source={youngTissa}></ButtonAndImage>
    </div>
  )
}

export default Main