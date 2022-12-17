import React from 'react'


import './style/Contact.css'

import {useRef} from "react"

import emailjs from '@emailjs/browser';


export const Contact = () => {
    const form = useRef()
    
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_htupg4p', 'template_4gupp1f', form.current, 'EG_H_B-I-8ToLTVYr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className='contact-container'>
        <h2>Contact me</h2>
        <form className='form-container' ref={form} onSubmit={sendEmail}>
            <input type='text'
            placeholder='Full Name'
            name='user_name' required />
            <input type='email'
            placeholder='Email'
            name='user_email' required />
            <input type='text'
            placeholder='Subject'
            name='subject' required />
            <textarea name='message' cols='30' rows="5" placeholder='say something to me...'></textarea>
            <button className='btn' type='submit'>send message</button>
        </form>
        <small>giorgizanqaidzeOfficial@gmail.com</small>
    </div>
  )
}
