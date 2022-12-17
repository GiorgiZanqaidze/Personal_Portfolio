import React, {useState} from 'react'



import { Link } from 'react-router-dom'
// navbar logo
import navbarLogo from "./assets/images/GZLogo7.png"

// style 
import './style/Navbar.css'

import { AiOutlineMenuFold, AiFillGithub} from 'react-icons/ai';
import {BsFacebook, BsLinkedin} from 'react-icons/bs'



export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const toggle = () => {
        setShowNavbar(!showNavbar)
    }

  return (
    <div className='navbar-container'>
        <div className='logo-container'>
            <Link to="/" className='link'>
                <img src={navbarLogo} alt='js logo' className='logo'/>
            </Link>
        </div>
        <nav className={`navbar ${showNavbar ? 'show-navbar' : ""}`}>
            <ul className='nav-list'>
                <li className='list-item'>
                    <Link to="/" onClick={() => toggle()}>Home</Link>
                </li>
                <li className='list-item'>
                    <Link to="/about" onClick={() => toggle()}>About</Link>
                </li>
                <li className='list-item'>
                    <Link to="/skills" onClick={() => toggle()}>Skills</Link>
                </li>
                <li className='list-item'>
                    <Link to="/myWork" onClick={() => toggle()}>Projects</Link>
                </li>
            </ul>
            <ul className='socials-list'>
                <li>
                    <a href='https://www.facebook.com/profile.php?id=100005427184270' target='blank'><BsFacebook /></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/giorgi-zankaidze-115989223/' target='blank'><BsLinkedin /></a>
                </li>
                <li>
                    <a href='https://github.com/GiorgiZanqaidze' target='blank'><AiFillGithub /></a>
                </li>
            </ul>
        </nav>
        <div className='burger-container'>
            <AiOutlineMenuFold className='burger' onClick={() => toggle()}/>
        </div>
    </div>
  )
}

  

