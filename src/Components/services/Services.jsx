import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>

      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>User-Centered Design: Prioritize user needs.</p>
            </li>
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>Visual Storytelling: Engaging, brand-aligned visuals. </p>
            </li>
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>Interactive Prototyping: Test user experience early.</p>
            </li>
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>Responsive Design: Mobile-first approach.</p>
            </li>
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>Design Systems: Maintain brand consistency.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>Cutting-Edge Tech: Implement the latest web technologies.</p>
            </li>
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>Pixel-Perfect Design: Meticulous attention to detail.</p>
            </li>
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>Performance Optimization: Speed and SEO are priorities.</p>
            </li>
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>Cross-Platform Proficiency: Consistency across devices.</p>
            </li>
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>Accessibility Advocacy: Inclusive web design.</p>
            </li>
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>Collaborative Workflow: Client involvement throughout.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>Strategic Planning: Content aligns with goals.</p>
            </li>
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>SEO Optimization: Improve search rankings.</p>
            </li>
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>Compelling Storytelling: Engage and resonate.</p>
            </li>
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>Versatility: Content for various platforms.</p>
            </li>
            <li>
              <BiCheck className='serives_list-icon'/>
              <p>Content Revitalization: Update and enhance existing content.</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default services