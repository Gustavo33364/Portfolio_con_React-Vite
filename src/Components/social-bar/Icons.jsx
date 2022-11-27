import React from 'react'
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn   } from 'react-icons/fa'
import './Icons.css'


const Icons = () => {
  return (
    <div className="icons">
        <div className="Icon Facebook">
            <a href="https://www.facebook.com/gustavoayalaa" target='_blank'><FaFacebookF style={{ color: '#ffffff' }}/></a>
        </div>
        <div className="Icon Twitter">
            <a href="https://twitter.com/Gustavo75736689" target='_blank'><FaTwitter style={{ color: '#93e5eb' }}/></a>
            </div>
        <div className="Icon Github">
            <a href="https://github.com/Gustavo33364" target='_blank'><FaGithub style={{ color: '#fff' }}/></a>
        </div>
        <div className='Icon Linkedin'>
          <a href="https://www.linkedin.com/in/gustavo-frontend" target='_blank'><FaLinkedinIn style={{ color: '#fff' }}/></a>
        </div>

    </div>
  )
}

export default Icons