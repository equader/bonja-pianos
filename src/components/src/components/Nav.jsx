import React from 'react';
import './css/nav.css';
import Menu from './Menu'
import logo from './logos/logo.svg';



function Nav() {
  return (
    <div className='nav'>
        <img loading="lazy" src={logo} alt="bonja-piano-logo" className="logo" />
        <Menu/>
    </div>
  );
}

export default Nav;