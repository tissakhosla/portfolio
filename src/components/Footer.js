import React from 'react';
import Logo from './Logo'
import './Footer.css'

import LinkedInLogo from '../assets/LI-In-Bug.png';
import GitHubLogo from '../assets/GitHub-Mark-120px-plus.png';
import NotesLogo from '../assets/music-player.png';

const Footer = () => {
  let LinkedInURL = ''
  let GitHubURL = ''
  let TKSiteURL = ''
  return (
    <footer className='site-footer'>
      <div className='site-footer__logos'>
        <Logo url={LinkedInURL} image={LinkedInLogo}></Logo>
        <Logo url={GitHubURL} image={GitHubLogo}></Logo>
        <Logo url={TKSiteURL} image={NotesLogo}></Logo>
      </div>
    </footer>
  )
}

export default Footer;