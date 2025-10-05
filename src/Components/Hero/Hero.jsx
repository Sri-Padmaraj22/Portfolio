import React from 'react'
import './Hero.css'
import profile_img from '../../assets/SRI-PHOTO.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img className='hero-image' src={profile_img} alt="" />
        <h1><span>I'm Sri Padmaraj,</span>an aspiring Frontend Developer.</h1>
        <p>Frontend Engineer with strong skills in React.js, focused on building responsive, user-friendly, and scalable web interfaces. Passionate about creating seamless user experiences through clean design and efficient code, while continuously learning new tools and technologies to stay ahead in modern frontend development. Currently exploring backend concepts to broaden problem-solving and full-stack capabilities.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink onClick={()=> setMenu('contact')} className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
