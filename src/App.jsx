import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar'
import Cover from './Components/cover/Cover';
import About from './Components/about/About';
import Slider from './Components/slider/Slider';
import Skills from './Components/skills/Skills';
import Cont from './Components/Contacto/Cont';



function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Cover  />
      <About />
      <Slider />
      <Skills />
      <Cont />
    </div>
  )
}

export default App