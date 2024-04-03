import React from "react";
import navLinks from './NavLinks';


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