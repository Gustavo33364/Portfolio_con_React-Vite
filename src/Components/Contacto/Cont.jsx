import React from 'react'
import css from './Cont.css'
import Contactame from '../../Media/Contactame.jpg'
import Icons from '../social-bar/Icons'


const Cont = () => {
  return (
  <div className="contacto" id='Contacto'>
    
    <div className="texto">
        <h2>Contactame!</h2>
        <h3>El mundo al alcance tu mano!</h3>
    </div>
    <div className="image">
        <img src={Contactame} alt="" />
    </div>
    <div className="redes">
      <Icons />
    </div>
    <div className="footer">
      <p>Copyright © 2022 Gustavo.Dev</p>
    </div>
  </div>

  )
}

export default Cont