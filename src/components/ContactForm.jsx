import React, { useState } from "react";
import './css/contact.css';
import Button from "./Button";

function ContactForm () {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        location: '', 
        problemDescription: '', 
        services: []
    });

    const handleInputChange = (event) => { 
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleServiceChange = (event) => { 
        const { value } = event.target;
        let services = formData.services.includes(value)
            ? formData.services.filter(service => service !== value)
            : [...formData.services, value];
        setFormData({ ...formData, services });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className="contactPanel">
            <h1>Get in touch</h1>
            <p>Like what you've seen? Get in touch by putting your contact details and we'll be sure to get back to you.</p>
            <div className="formInput">
                <form onSubmit={handleSubmit}>
                    <div className="firstandLastName">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />

                    </div>
                
                    <input
                        type="email"
                        name="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="+61 xxx xxx xxx"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Your location"
                        value={formData.location}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="problemDescription"
                        placeholder="Describe your problem"
                        value={formData.problemDescription}
                        onChange={handleInputChange}
                    />
                    <fieldset>
                        <legend>Services</legend>
                        {['Tuning', 'Servicing', 'Cleaning', 'Other'].map((service) => (
                            <label key={service}>
                                <input
                                    type="checkbox"
                                    name="services"
                                    value={service}
                                    checked={formData.services.includes(service)}
                                    onChange={handleServiceChange}
                                />
                                {service}
                            </label>
                        ))}
                    </fieldset>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
