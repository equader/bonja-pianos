import React, { useState } from "react";
import './css/contact.css';

function ContactForm () {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        services: []
    });

    const handleInputChange = (event) => { // for fields
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleServiceChange = (event) => { // for checkboxes
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
            <p>Like what you've seen or maybe just curious to hear more? Get in touch by putting your contact details and we'll be sure to get back to you.</p>
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
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="+1(555) 000-0000"
                        value={formData.phoneNumber}
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
