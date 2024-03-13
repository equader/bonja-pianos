import React, { useState } from "react";
import './css/contact.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; 


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

    const handlePhoneChange = (phone) => {
        setFormData({ ...formData, phoneNumber: phone });
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
        <div id="contact-section" className="contactPanel">
            <h1>Get in touch</h1>
            <p>Like what you've seen? Get in touch by calling us on +61 450 284 115 or by putting your contact details below and we'll be sure to get back to you to assess how we can best help you and your piano.</p>
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
                    <PhoneInput
                        international
                        defaultCountry="AU"
                        value={formData.phoneNumber}
                        onChange={handlePhoneChange}
                        placeholder="Enter phone number"
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