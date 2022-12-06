import React from 'react'
import './Slider.css'
import MundosE from '../../Media/MundosE.png'
import Porfoliog from '../../Media/Porfoliog.png'
import movies from '../../Media/movies.png'
import { FaGithub } from 'react-icons/fa'



const siguiente = () => {

}

setInterval(() => {
    siguiente();
}, 4000);

const Slider = () => {
  return (
  <div className="carousel-container" id='Proyectos'>
    <div className="car-title">
      <h2>Proyectos <br/> realizados</h2>
      <div className="github">
        <a href="https://github.com/Gustavo33364" target='_blank'><FaGithub style={{ color: '#fff' }}/></a>
      </div>
    </div>

    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={MundosE} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Proyecto final Certificacion</h5>
        <p>Esta realizado usando React, bootstrap, sass y Laravel</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Porfoliog} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Porfolio personal</h5>
        <p>Proyecto realizado en react + Vite.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={movies} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Desafio Movie</h5>
        <p>Simula buscador de peliculas hecho con api movieid</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

  )
}

export default Slider