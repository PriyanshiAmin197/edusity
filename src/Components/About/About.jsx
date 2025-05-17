import React from 'react'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import './About.css';

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
            The Eastside Medical Clinic is a purpose-built clinic with easy access located in downtown Hamilton with rear parking. We aim to provide comprehensive medical care to the community of Hamilton and the surrounding areas using the highest ethical and professional standards while offering full family practice services as well as an array of specialist healthcare services all under one roof.
            </p>
            <p>
            The Eastside Medical Clinic is a purpose-built clinic with easy access located in downtown Hamilton with rear parking. We aim to provide comprehensive medical care to the community of Hamilton and the surrounding areas using the highest ethical and professional standards while offering full family practice services as well as an array of specialist healthcare services all under one roof.
            </p>
            <p>
            The Eastside Medical Clinic is a purpose-built clinic with easy access located in downtown Hamilton with rear parking. We aim to provide comprehensive medical care to the community of Hamilton and the surrounding areas using the highest ethical and professional standards while offering full family practice services as well as an array of specialist healthcare services all under one roof.
            </p>
        </div>

    </div>
  )
}

export default About