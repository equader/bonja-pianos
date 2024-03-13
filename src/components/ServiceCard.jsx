import React from "react";
import './css/services.css'; 


function ServiceCard({ title, text, icon }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={icon} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
}

export default ServiceCard;