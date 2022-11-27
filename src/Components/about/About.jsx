import React from 'react'
import './About.css'
import about from '../../Media/about.jpg'

const About = () => {
  return (
    <div className="about-container" id='Sobre Mi'>

    <div className="about-desc">
        <h3>Algunas cosas sobre mi </h3>
        <p> Mi nombre es Gustavo Ayala, un informatico emprendedor y amante de la tecnología. <br/>
            Desde 2019 he decidido empezar a formarme como desarrollador. obtuve mi certificación como FullStack, pero decidí orientarme hacia el desarrollo FrontEnd.<br/>
            La programación en mi norte, me converti en un contínuo y apasionado aprendíz.
            Actualmente me encuentro trabajando en distintos proyectos personales donde desarrollo los conocimientos adquiridos.<br/>
            Si estás buscando profesionalidad, responsabilidad y dedicación, ¡cuenta conmigo!
            </p>
    </div>

    <div className="about-img">
        <img src={about} alt="about" />
    </div>
    </div>
  )
}

export default About