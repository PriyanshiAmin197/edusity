import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import './Navbar.css';
import { Link, Element } from 'react-scroll';

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className="container dark-nav">
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offset={-160} duration={500}>About us</Link></li>
            <li><Link to="campus" smooth={true} offset={-260} duration={500}></Link>Campus</li>
            <li><Link to="testimonials" smooth={true} offset={-260} duration={500}></Link>Testimonials</li>
            <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>  
    </nav>
  )
}

export default Navbar