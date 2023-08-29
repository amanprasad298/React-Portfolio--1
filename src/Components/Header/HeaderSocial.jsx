import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div>
        <div className="header_social">
            <a href="https://www.linkedin.com/in/amankumarprasad/" target='_blank'><BsLinkedin/></a>
            <a href="https://github.com/amanprasad298" target='_blank'><FaGithub/></a>
            <a href="https://www.instagram.com/glitch_ed__/" target='_blank'><BsInstagram/></a>
        </div>
    </div>
  )
}

export default HeaderSocial