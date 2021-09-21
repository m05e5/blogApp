import React from 'react';
import { Link } from 'react-router-dom';
import headBg from '../images/ashe_bg.jpg'

import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';

const Header = () => {
  return (
    <div>
      <div className='navBar'>
      <ul className='headLinks'>
          <li>
            <Link to="/" className="headLink">HOME</Link>
          </li>
          <li>
            <Link to="/news" className="headLink">NEWS</Link>
          </li>
          <li>
            <Link to="/" className="headLink">LIFESTYLE</Link>
          </li>
      </ul>
        <div className='navIcons'>
          <Twitter className='navIcon' />
          <Facebook className='navIcon' />
          <Youtube className='navIcon' />
          <Instagram className='navIcon' />
        </div>
      </div>
      <div className='headBg'>
        <img src={headBg} />
      </div>
      <ul className='navLinks'>
          <li>
            <Link to="/" className="navLink">HOME</Link>
          </li>
          <li>
            <Link to="/news" className="navLink">NEWS</Link>
          </li>
          <li>
            <Link to="/" className="navLink">LIFESTYLE</Link>
          </li>
          <li>
            <Link to="/" className="navLink">FASHION</Link>
          </li>
          <li>
            <Link to="/" className="navLink">NATURE</Link>
          </li>
          <li>
            <Link to="/" className="navLink">HEALTH</Link>
          </li>
          <li>
            <Link to="/" className="navLink">TRAVEL</Link>
          </li>
        </ul>
    </div>
  )
}

export default Header;