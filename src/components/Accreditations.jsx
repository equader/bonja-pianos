import React from "react";
import "./css/accreditations.css"
import "./logos/pianolifesaver.svg"
import lifesaver from './logos/pianolifesaver.svg';
import yamaha from './logos/yamaha.svg'
import bechstein from './logos/bechstein.svg'

function AccreditationCards() {
    const accreds = [
      {
        id: 1,
        src: lifesaver,
        alt: "Life Saver Logo",
        description: "Certified Piano Installer"
      },
      {
        id: 2,
        src: yamaha,
        alt: "Yamaha Logo",
        description: "Yamaha Authorised Service Agent"
      },
      {
        id: 3,
        src: bechstein,
        alt: "C.Bechstein Logo",
        description: "Official C. Bechstein Technician"
      },

    ];
  

    return (
        <div className="accredPanel">
            <h1>Our Accreditations</h1>
            <div className="accredsRow">
                {accreds.map((accred) => (
                <div key={accred.id} className="accredCard">
                    <img src={accred.src} alt={accred.alt}/>
                    <p>{accred.description}</p>
                </div>))}
            </div>
        </div>
    );
  }

export default AccreditationCards;