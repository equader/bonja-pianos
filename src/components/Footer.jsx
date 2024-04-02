import React from "react";
import logo from './logos/logo.svg';
import './css/footer.css';
import Menu from "./Menu";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

function Footer() {
    const footerIcons = [
        { id: 1, href: 'https://facebook.com', icon: <BsFacebook />, text: 'Facebook' },
        { id: 2, href: 'https://www.youtube.com/@roguepianoman5134', icon: <BsYoutube />, text: 'Youtube' },
        { id: 3, href: 'https://instagram.com', icon: <BsInstagram />, text: 'Instagram' },
    ];

    return (
        <div className="footer">
            <div className="footer-menu">
                <img loading="lazy" src={logo} alt="bonja-piano-logo" className="logo" />
                <Menu />
                <div className="social-icons">
                    {footerIcons.map(icon => (
                        <a key={icon.id} href={icon.href} aria-label={icon.text} className="icon-size">
                            {icon.icon}
                        </a>
                    ))}
                </div>
            </div>
            <p> © 2024 Bonja Pianos. All Rights Reserved. | ABN 65 831 469 318</p>
            <p style={{textDecoration: 'none', fontSize: 'small' }}>Designed and built by <a href="https://equader.github.io/"style={{ color: 'inherit', textDecoration: 'none', fontSize: 'small' }}>Eshaan Mahimkar</a></p>
        </div>
    );
}

export default Footer;
