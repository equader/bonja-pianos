import React from "react";
import './css/services.css';
import ServiceCard from './ServiceCard'
import tuningIcon from './images/tuning-service.png'; 
import servicingIcon from './images/servicing-service.png';
import cleaningIcon from './images/cleaning-service.jpg'; 


function Services() {
    const services = [
        {
            id: 1,
            title: 'Piano Tuning',
            text: 'Tuning to concert pitch (440hz) to ensure your piano is stable across all registers. Prices start at $250',
            icon: tuningIcon,
        },
        {
            id: 2,
            title: 'Piano Servicing',
            text: 'Servicing your piano to concert level standards, better touch and control and quality voicing for a super piano playing experience. Prices start at $x',
            icon: servicingIcon,
        },
        {
            id: 3,
            title: 'Detailed Cleaning',
            text: 'Cleaning to get your piano to not just sound beautiful but also look the part too. Prices start at $x.',
            icon: cleaningIcon,
        }
    ];

    return(
        <div className="servicesPanel">
                    <h1>Services to bring your piano back to life</h1>
                    <p>We pride ourselves as being piano enthusiasts commited to delivering excellent customer service and quality work. Whether you are indivudal, organisation or anything inbetween, Bonja Pianos is a leader in getting your piano back to where it should be.</p>
            <div className="services-row">
                {services.map(service => (
                        <ServiceCard 
                            key={service.id}
                            title={service.title}
                            text = {service.text}
                            icon={service.icon}
                        />
                    ))}
                </div>
        </div>
    )
}

export default Services;