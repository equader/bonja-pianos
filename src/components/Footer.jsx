import React from "react";
import logo from './logo.svg';
import './css/footer.css';
import Menu from "./Menu";



function Footer() {
    return (
        <div className="footer">
            <div className="footer-menu">
                <img loading="lazy" src={logo} alt="bonja-piano-logo" className="logo" />
                <Menu/>
            </div>
            <p>© 2024 Bonja Pianos. All Rights Reserved. | ABN 65 831 469 318</p>
        </div>
    );
  }

export default Footer;