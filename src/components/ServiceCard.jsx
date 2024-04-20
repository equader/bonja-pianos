import React from "react";
import Button from './Button';

function ServiceCard({ title, text, price, icon }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={icon} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6>{price}</h6>
                <p className="card-text">{text}</p>
                <div className="button-container">
                    <Button text="Request a quote" onClick={() => window.location.hash = 'contact-section'} />
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;