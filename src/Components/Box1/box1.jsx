import React from 'react'
import './Box1.css'
import saved from '../Assets/saved.png'
import cross_mail from '../Assets/cross-mail.png'

const box1 = () => {
  return (
    <div className='box1'>
      <h1>Developer Application</h1>
      <p className='th'>Thank you for your interest in joining our team!</p>

      <p>We pride ourselves on having a team of top-tier developers from around the world, and we're excited to see if you're the right fit. While we're primarily looking for full-time professionals, we also encourage talented college or university students to apply for internships.</p>

      <p className="main">
      As part of our commitment to helping developers succeed, we highly recommend you explore <span>this program</span> designed to assist developers in finding the right job opportunities. <span className='last-line'>This could be a great resource for you as you navigate your career.</span>
      </p>

      <hr />

      <div className="mail">
        <p><span className='mail-text'>abc@gmail.com</span> Switch Account</p>
        <img src={saved} alt="" />
      </div>
      <p className='not_shared'><img src={cross_mail} alt="" /> Not Shared</p>

      <hr />

      <p className='ind mb-2'>* indicates required position</p>
    </div>
  )
}

export default box1
