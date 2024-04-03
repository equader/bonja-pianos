import React from "react";
import './css/clients.css';
import usydlogo from './logos/clientlogos/usyd-logo.svg';
import acologo from './logos/clientlogos/aco-logo.svg';
import kambalalogo from './logos/clientlogos/kambala-logo.svg';
import trinitylogo from './logos/clientlogos/trinity-logo.svg';
import chatswoodconcourse from './logos/clientlogos/cc-logo.svg';
import cityrecitalhall from './logos/clientlogos/crh-logo.svg';
import sonar from './logos/clientlogos/sonar.svg'



const clientLogos = [
      { src: usydlogo, alt: 'University of Sydney Logo' },
      { src: acologo, alt: 'Australian Chamber Orchestra Logo' },
/*       { src: chatswoodconcourse, alt: 'Chatswood Concourse Logo'}, */
      { src: kambalalogo, alt: 'Kambala Logo' },
      { src: trinitylogo, alt: 'Trinity Logo'},
      {src: sonar, alt: 'Sonar Logo'}
/*       { src: cityrecitalhall, alt: 'City Recital Hall Logo'}, */

    ];

function Clients(){
    return(
        <div className="clientsPanel">
            <p>Hundreds of people and insitutions across Sydney and Canberra trust Bonja Pianos to restore their pianos back to harmony.</p>
            <div className="logos">
                {clientLogos.map((logo, index) => (<img key={index} src={logo.src} alt={logo.alt} className="company-logo" />))}
            </div>

        </div>
    )
}

export default Clients;