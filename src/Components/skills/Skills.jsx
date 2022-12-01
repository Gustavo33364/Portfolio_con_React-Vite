import React from 'react'
import './Skills.css'
import html from '../../Media/html.png' 
import css from '../../Media/css.png'
import sass from '../../Media/sass.png'
import javascript from '../../Media/Javascript.png'
import react from '../../Media/react.png'
import Laravel from '../../Media/Laravel.png'
import php from '../../Media/php.png'
import mysql from '../../Media/mysql.png'
import git from '../../Media/git.png'
import github from '../../Media/Github.png'
import npm from '../../Media/npm.png'
import visual from '../../Media/visual.png'
import nodejs from '../../Media/nodejs.png'


const Skills = () => {
  return (
    <div className="section skills" id='Conocimientos'>
    
        <div className="skill">
            <div className="knoeledge-part">
            <h2><span> Knowledge |</span> Conocimientos</h2>

                <div className="knowledge">
                    <div><img src={html} alt="Img-default" />
                    <h3>HTML</h3></div>
                    

                    <div><img src={css} alt="Img-default" />
                    <h3>css</h3></div>
                   

                    <div><img src={sass} alt="Img-default" />
                    <h3>sass</h3></div>
                    

                    <div><img src={javascript} alt="Img-default" />
                    <h3>javascript</h3></div>
                    

                    <div><img src={react} alt="Img-default" />
                    <h3>react</h3></div>
                    

                    <div><img src={Laravel} alt="Img-default" />
                    <h3>laravel</h3></div>
                    

                    <div><img src={php} alt="Img-default" />
                    <h3>php</h3></div>
                    

                    <div><img src={mysql} alt="Img-default" /> 
                    <h3>mysql</h3></div>
                    
                </div>

            </div>

            <div className="tools-part">
                <h2><span>Dev tools |</span> Herramientas</h2>

                <div className="tools">

                    <div><img src={git} alt="Img-default" /> 
                    <h3>Git</h3></div>
                    

                    <div><img src={github} alt="Img-default" />
                    <h3>gitHub</h3></div>
                    

                    <div><img src={npm} alt="Img-default" />
                    <h3>npm</h3></div>
                    

                    <div><img src={visual} alt="Img-default" />
                    <h3>Visual Studio Code</h3></div>
                    

                    <div><img src={nodejs} alt="Img-default" />
                    <h3>nodejs</h3></div>
                    


                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills