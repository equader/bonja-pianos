import React, { useEffect, useState } from "react";
import Button from './Button';

import heroImg0 from './images/AIPIC.png'
import heroImg1 from './images/pianotuning.png';
import heroImg2 from './images/heroimage2.png';
import heroImg3 from './images/heroimage3.png';
import heroImg4 from './images/heroimage4.png';
import piano from './images/pianobeingtuned.webp'



function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');
    const images = [piano, heroImg2, heroImg3, heroImg4];

    useEffect(() => {
        setFadeClass('fade-in');
        const interval = setInterval(() => {
            setFadeClass('fade-out');
            setTimeout(() => {
                setCurrentImage((prevImage => (prevImage + 1) % images.length));
                setFadeClass('fade-in');
            }, 500);  
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="home-section" className="HeroContainer">
            <div className="HeroBlurb">
                <div className="HeroHeader">
                    <h1>Piano servicing you can trust</h1>
                    <p>Bonja Pianos has been serving the Sydney and Canberra's region through the detailed care and restoration of pianos, striving to bring out the best in every instrument. We look forward to continuing our journey and sharing our passion for pianos with you.</p>
                </div>
                <Button text="Request a quote" onClick={() => window.location.hash = 'contact-section'} />
            </div>
            <div className={`imageContainer ${fadeClass}`} style={{ backgroundImage: `url(${images[currentImage]})` }}></div>
        </div>
    );
}

export default Hero;