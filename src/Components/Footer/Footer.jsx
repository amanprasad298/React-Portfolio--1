import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>AMAN</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/amankumarprasad/" target='_blank'><BsInstagram/></a>
        <a href="https://github.com/amanprasad298" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/amankumarprasad/" target='_blank'><BsLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Aman Kumar Prasad. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer