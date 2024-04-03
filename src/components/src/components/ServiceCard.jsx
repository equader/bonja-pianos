import React from "react";
import './css/services.css'; 
import Button from './Button';


function ServiceCard({ title, text, icon }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={icon} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <Button text="Request a quote" onClick={() => window.location.hash = 'contact-section'} />
            </div>

        </div>
    );
}

export default ServiceCard;