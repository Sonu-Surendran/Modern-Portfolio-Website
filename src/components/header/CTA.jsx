import React from 'react'
import CV from '../../images/Sonu resume.pdf'


function CTA() {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's chat</a>
    </div>
  )
}

export default CTA