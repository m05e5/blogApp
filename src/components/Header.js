import React from 'react';
import { Link } from 'react-router-dom';

import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';

const Header = () => {
  return (
    <div>
      <div className='navBar'>
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
        <div className='navIcons'>
          <Twitter className='navIcon' />
          <Facebook className='navIcon' />
          <Youtube className='navIcon' />
          <Instagram className='navIcon' />
        </div>
      </div>
    </div>
  )
}

export default Header;