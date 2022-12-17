import React from 'react'

import './style/Home.css'

// navbar logo
import navbarLogo from "./assets/images/GZLogo7.png"

import { Link } from 'react-router-dom'

import {BsFillArrowRightCircleFill} from 'react-icons/bs'

export const Home = () => {
  return (
    <section className='home-container'>
      <article className='text-container'>
        <h2>Hi i'm <br /><strong>G</strong>iorgi<br /><strong>Z</strong>ankaidze</h2>
        <h4>Frontend developer</h4>
        <p>I'm beginner Frontend developer. I have learned html, css, javascript and react. Also, i have some projects using of thise technologies. <strong><Link to="/myWork" className='myProj'>Projects</Link></strong>
        </p>
      </article>
      <article className='hero-container'>
          <img src={navbarLogo} alt="hero"/>
      </article>
    </section>
  )
}
