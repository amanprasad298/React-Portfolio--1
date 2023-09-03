import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1ig0v2e', 'template_joz5nvp', form.current, 'SVciyK0sHM1KOgFZv')
    e.target.reset()
      
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <p>amanprasad1502@gmail.com</p>
            <a href="mailto:amanprasad1502@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <p>+91 9678560357</p>
            <a href="https://api.whatsapp.com/send?phone=919678560357&text=Hii" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>

    </section>
  )
}

export default Contact