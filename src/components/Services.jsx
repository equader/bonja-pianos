import React from "react";
import ServiceCard from './ServiceCard';
import tuningIcon from './images/tuning-service.png'; 
import servicingIcon from './images/servicing-service.png';
import cleaningIcon from './images/cleaning-service.jpg'; 

function Services() {
    const services = [
        {
            id: 1,
            title: 'Piano Tuning',
            price: '$250',
            text: 'Tuning to concert pitch (440hz) to ensure your piano is stable across all registers. Piano will be played at the end of the tuning session to make sure it all sounds perfect.',
            icon: tuningIcon,
        },
        {
            id: 2,
            title: 'Piano Servicing',
            price: '$125',
            text: 'Servicing your piano to concert level standards for better touch, control and quality for a superior piano playing experience.',
            icon: servicingIcon,
        },
        {
            id: 3,
            title: 'Detailed Cleaning',
            price: '$125',
            text: 'Cleaning to get your piano to not just sound beautiful but also look the part.',
            icon: cleaningIcon,
        }
    ];

    return (
        <div id="services-section" className="servicesPanel">
            <h1>Services to bring your piano back to life</h1>
            <p>We pride ourselves as being piano enthusiasts committed to delivering excellent customer service and quality work. Whether you are an individual, organisation, cafe or anything in between, Bonja Pianos is a leader in getting your piano back to where it should be.</p>
            <div className="services-row">
                {services.map(service => (
                    <ServiceCard 
                        key={service.id}
                        title={service.title}
                        price={service.price}
                        text={service.text}
                        icon={service.icon}
                    />
                ))}
            </div>
        </div>
    );
}

export default Services;