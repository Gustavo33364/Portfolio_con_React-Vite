import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../Media/logo.png'




import './NavBar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <div className="logo">
                <img src={logo} alt="Gustavo.Dev"/>
                
                </div>
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#Sobre Mi' onClick={closeMenu}>Sobre mi</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Proyectos' onClick={closeMenu}>Proyectos</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Conocimientos' onClick={closeMenu}>Conocimientos</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Contacto' onClick={closeMenu}>Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar