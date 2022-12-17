import React from 'react'


import './style/Skills.css'

import html from './assets/images/html.png'
import css from './assets/images/css.png'
import javascript from "./assets/images/javascript.png"
import react from "./assets/images/react.png"
import github from "./assets/images/github.png"
import netlify from "./assets/images/netlify.png"
import figma from "./assets/images/figma.png"

export const Skills = () => {
  return (
    <section className='skills-container'>
      <article className='techlogogies-list'>
        <h2>TECHNOLOGIES I USE</h2>
        <div className='underline'></div>
        <ul className='list'>
          <li className='item'>
            <img src={html} alt='html' />
          </li>
          <li className='item'>
            <img src={css} alt='css' />
          </li>
          <li className='item'>
            <img src={javascript} alt='javascript' />
          </li>
          <li className='item'>
            <img src={react} alt='react' />
          </li>
        </ul>
        <div className='underline2'></div>
        <ul className='list'>
          <li className='item'>
            <img src={github} alt='github' />
          </li>
          <li className='item'>
            <img src={netlify} alt='netlify' />
          </li>
          <li className='item'>
            <img src={figma} alt='figma' />
          </li>
        </ul>
      </article>
    </section>
  )
}

