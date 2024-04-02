import React from "react";
/* import navLinks from './navLinks'; */
import './css/footer.css';

const navLinks = [
  { id: 'home', text: 'Home', href: '#home-section' },
  { id: 'about', text: 'About', href: '#about-section' },
  { id: 'services', text: 'Services', href: '#services-section' },
  { id: 'faq', text: 'FAQ', href: '#faq-section' },
  { id: 'contact', text: 'Contact', href: '#contact-section' },
];


function Menu(){
    return(
        <div className="nav-links" >
          {navLinks.map(link => (
            <a style={{ textDecoration: 'none' }} key={link.id} href={link.href}>{link.text}</a>
          ))}
        </div>
    )
}

export default Menu;