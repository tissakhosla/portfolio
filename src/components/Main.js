import React from 'react';
import './Main.css';
import ButtonAndImage from './ButtonAndImage';
import ProfilePicture from '../assets/profilePictureBig.png';
import youngTissaPic from '../assets/writing.png';
import projectsPic from '../assets/projectsScreenshot.JPG';
import resume from '../assets/TK_Resume.pdf'
import projects from '../assets/Projects.pdf'

const Main = () => {
  // let resumeURL = 'https://docs.google.com/document/d/13bowdC3RLGehTgP7H_aFoc_dOygcR18a6bh8rtgHAxM/edit?usp=sharing'
  let writingURL = 'https://medium.com/@the_new_old_fashioned'

  return (
    <div className='Main'>
      <ButtonAndImage
        altText='Tissa in front of a mural'
        item='resume'
        link={resume}
        label='RESUME'
        source={ProfilePicture}>
      </ButtonAndImage>
      <ButtonAndImage
        altText='Screenshot of Spotify API code'
        item='projects'
        link={projects}
        label='PROJECTS'
        source={projectsPic}>
      </ButtonAndImage>
      <ButtonAndImage
        altText='Tissa at 8 years old at the PC'
        item='writing'
        link={writingURL}
        label='WRITING'
        source={youngTissaPic}>
      </ButtonAndImage>
    </div>
  )
}

export default Main