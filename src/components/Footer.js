import React from 'react';
import Logo from './Logo'
import './Footer.css'

import LinkedInLogo from '../assets/LI-In-Bug.png';
import GitHubLogo from '../assets/GitHub-Mark-120px-plus.png';
import NotesLogo from '../assets/music-player.png';
import MediumLogo from '../assets/Monogram.png'

const Footer = () => {
  let LinkedInURL = 'https://www.linkedin.com/in/tissa-khosla-b4583062/'
  let GitHubURL = 'https://github.com/tissakhosla'
  let TKSiteURL = 'https://www.tissakhosla.com/'
  let MediumURL = 'https://medium.com/@the_new_old_fashioned'
  return (
    <footer className='site-footer'>
      <div className='site-footer__logos'>
        <Logo url={LinkedInURL} image={LinkedInLogo}></Logo>
        <Logo url={GitHubURL} image={GitHubLogo}></Logo>
        <Logo url={TKSiteURL} image={NotesLogo}></Logo>
        <Logo url={MediumURL} image={MediumLogo}></Logo>
      </div>
    </footer>
  )
}

export default Footer;