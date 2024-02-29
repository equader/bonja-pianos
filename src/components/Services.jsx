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
            text: 'Tuning to concert pitch (440hz) starting at $250',
            icon: tuningIcon,
        },
        {
            id: 2,
            title: 'Piano Servicing',
            text: 'Servicing your piano to concert level standards, better touch and control and quality voicing for a super piano playing experience.',
            icon: servicingIcon,
        },
        {
            id: 3,
            title: 'Detailed Cleaning',
            text: 'Sparkle as you scale the scales! With our detailed cleaning service, your piano wont just sound beautiful, but it will look the part too. We dust and polish every crevice, ensuring your instrument shines from lid to leg.',
            icon: cleaningIcon,
        }
    ];

    return(
        <div className="servicesPanel">
                    <h1>Friendly, efficent and expert piano services for all customers</h1>
                    <p>We pride ourselves as being piano enthusiasts commited to delivering excellent customer service and quality work. Whether you are indivudal, organisation or anything inbetween, Bonja Pianos is a leader in getting your piano back to where it should be</p>
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