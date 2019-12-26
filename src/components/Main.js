import React from 'react';
import './Main.css';
import ButtonAndImage from './ButtonAndImage'
import ProfilePicture from '../assets/profilePicture.png'
import youngTissaPic from '../assets/atTheComputer.png'
import projectsPic from '../assets/projectsScreenshot.JPG'

const Main = () => {
  let resumeURL = 'https://docs.google.com/document/d/13bowdC3RLGehTgP7H_aFoc_dOygcR18a6bh8rtgHAxM/edit?usp=sharing'
  let projectsURL = 'https://docs.google.com/document/d/1joB1rVIowTAMpAnZ_7OXVYXylaUNgF7qlJHwaUgSnB0/edit?usp=sharing'
  let writingURL = 'https://medium.com/@the_new_old_fashioned'
  return (
    <div className='Main'>
      <ButtonAndImage link={resumeURL} label='RESUME' source={ProfilePicture}></ButtonAndImage>
      <ButtonAndImage link={projectsURL} label='PROJECTS' source={projectsPic}></ButtonAndImage>
      <ButtonAndImage link={writingURL} label='WRITING' source={youngTissaPic}></ButtonAndImage>
    </div>
  )
}

export default Main