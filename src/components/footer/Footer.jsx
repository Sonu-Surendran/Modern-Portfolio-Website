import React from 'react'
import './footer.css'

import {BsFacebook} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {SiLinkedin} from 'react-icons/si'

function Footer() {
  return (
    <footer>
      <a href="#header" className='footer__logo'>SONU</a>

      <ul className="footer__links">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://instagram.com"><RiInstagramFill/></a>
        <a href="https://linkedin.com"><SiLinkedin/></a>
      </div>

      <div className="footer__copyrights">
        <small>
        &copy;SONU . All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer