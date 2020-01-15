import React from 'react';
import './Main.css';
import ButtonAndImage from './ButtonAndImage';
import ProfilePicture from '../assets/profilePictureBig.png';
import aboutPic from '../assets/About_pic.JPG';
import projectsPic from '../assets/projectsScreenshot.png';
import resumePDF from '../assets/TK_Resume.pdf'
import projectsPDF from '../assets/Projects.pdf'
import aboutPDF from '../assets/Dev_Bio.pdf'

const Main = () => {


  return (
    <div className='Main'>
      <ButtonAndImage
        altText='Tissa in front of a mural'
        item='resume'
        link={resumePDF}
        label='RESUME'
        source={ProfilePicture}>
      </ButtonAndImage>
      <ButtonAndImage
        altText='Screenshot of Spotify API code'
        item='projects'
        link={projectsPDF}
        label='PROJECTS'
        source={projectsPic}>
      </ButtonAndImage>
      <ButtonAndImage
        altText='A pile of instruments on a shelf in disrepair.'
        item='about'
        link={aboutPDF}
        label='ABOUT'
        source={aboutPic}>
      </ButtonAndImage>
    </div>
  )
}

export default Main