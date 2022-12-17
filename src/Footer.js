import React from 'react'

import "./style/Footer.css"

import { Link } from 'react-router-dom'

export const Footer = () => {

  const scrollUp = () => {
    window.scrollTo(0, 0);
  }


  return (
    <div className='footer-container'>
        <div className='contact-link'>
          <Link className='link' to="/contact" onClick={scrollUp}>Contact Me</Link>
          <small>giorgizanqaidzeOfficial@gmail.com</small>
        </div>
        <div className='stripes-container'>
          <div className='stripe red'></div>
          <div className='stripe yellow'></div>
          <div className='stripe white'></div>
          <div className='stripe blue'></div>
        </div>
    </div>
  )
}
