import React from 'react';
import './Main.css';
import ButtonAndImage from './ButtonAndImage'
import ProfilePicture from '../assets/profilePicture.png'
import youngTissaPic from '../assets/atTheComputer.png'
import projectsPic from '../assets/projectsScreenshot.JPG'

const Main = () => {
  return (
    <div className='Main'>
      <ButtonAndImage label='RESUME' source={ProfilePicture}></ButtonAndImage>
      <ButtonAndImage label='PROJECTS' source={projectsPic}></ButtonAndImage>
      <ButtonAndImage label='WRITING' source={youngTissaPic}></ButtonAndImage>
    </div>
  )
}

export default Main