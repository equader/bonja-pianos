import React from "react";
import logo from './logos/logo.svg';
import './css/footer.css';
import Menu from "./Menu";
import footerIcons from "./footerIcons";



function Footer() {
    return (
        <div className="footer">
            <div className="footer-menu">
                <img loading="lazy" src={logo} alt="bonja-piano-logo" className="logo" />
                <Menu/>
                <div className="social-icons">
                    {footerIcons.map(icon => (
                    <a key={icon.id} href={icon.href} aria-label={icon.text}>
                        <img src={icon.icon} alt={icon.text} className="icon-size" />
                    </a>
                    ))}
                </div>
            </div>
            <p>© 2024 Bonja Pianos. All Rights Reserved. | ABN 65 831 469 318</p>
        </div>
    );
  }

export default Footer;