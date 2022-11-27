import React from 'react'
import './Cover.css'
import NavVideo from '../../Media/NavVideo.mp4'



const Cover = () => {
  return (
    <>
      <div className="inicio">
        <a href="#Inicio"></a>
      </div>
      <div className="cover-container">
        <video className='video' src={NavVideo} autoPlay loop muted />
        <h1>
            Gustavo.Dev
        </h1>
        <p>
            FullStack Developer | Entrepeneur
        </p>
      </div>

   </>

  )
}

export default Cover