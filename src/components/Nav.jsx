import React from 'react';
import navLinks from './navLinks';
import logo from './logo.svg';
import './css/nav.css';


function Nav() {
  return (
    <nav>
        <img loading="lazy" src={logo} alt="bonja-piano-logo" className="logo" />
        <div className="nav-links" >
          {navLinks.map(link => (
            <a style={{ textDecoration: 'none' }} key={link.id} href={link.href}>{link.text}</a>
          ))}
        </div>
    </nav>
  );
}

export default Nav;