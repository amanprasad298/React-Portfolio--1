import React from 'react'
import RESUME from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='CTA'>
        <a href={RESUME} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA