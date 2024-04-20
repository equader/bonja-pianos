import React from "react";
import NavLinks from './NavLinks';


function Menu(){
    return(
        <div className="nav-links" >
          {NavLinks.map(link => (
            <a style={{ textDecoration: 'none' }} key={link.id} href={link.href}>{link.text}</a>
          ))}
        </div>
    )
}

export default Menu;