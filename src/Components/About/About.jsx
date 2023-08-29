import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experiece</h5>
              <small>3 Years+ Working Experience</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>25+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>55+ Completed</small>
            </article>
          </div>


          <p>
          I'm Aman Kumar Prasad, a seasoned frontend developer, adept in crafting captivating digital experiences. With a fusion of code and design, I breathe life into websites that not only function flawlessly but also resonate with aesthetic brilliance. Boasting over three years of hands-on expertise, I seamlessly blend my roles as a UI/UX maestro and a content virtuoso, sculpting digital landscapes that leave a lasting impact. Having lent my skills to more than 55 projects, I stand as a testament to the power of dedication and artistic dexterity. Join me on this exhilarating journey of transforming ideas into immersive realities.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>


        </div>

      </div>

    </section>
  )
}

export default About