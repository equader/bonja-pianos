import React, { useState } from "react";
import './css/contact.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        location: '',
        problemDescription: '',
        services: []
    });
    const [formErrors, setFormErrors] = useState({});
    const [buttonText, setButtonText] = useState('Send message');
    const [buttonStyle, setButtonStyle] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: '' });
    };

    const handlePhoneChange = (phone) => {
        setFormData({ ...formData, phoneNumber: phone });
        setFormErrors({ ...formErrors, phoneNumber: '' });
    };

    const handleServiceChange = (event) => {
        const { value } = event.target;
        let services = formData.services.includes(value)
            ? formData.services.filter(service => service !== value)
            : [...formData.services, value];
        setFormData({ ...formData, services });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.firstName.trim()) errors.firstName = "First name is required";
        if (!formData.lastName.trim()) errors.lastName = "Last name is required";
        if (!formData.email.trim()) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email address is invalid";
        if (!formData.location.trim()) errors.location = "Location is required";
        if (!formData.problemDescription.trim()) errors.problemDescription = "Problem description is required";
        if (!formData.phoneNumber.trim()) errors.phoneNumber = "Phone number is required";
        if (formData.services.length === 0) errors.services = "Please select at least one service";



        setFormErrors(errors);
        return Object.keys(errors).length === 0; 
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) return;

        const dataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            if (key !== 'services') {
                dataToSend.append(key, formData[key]);
            } else {
                formData[key].forEach(service => {
                    dataToSend.append('services[]', service);
                });
            }
        });

        dataToSend.append('access_key', '79f3ea8f-abc2-4a7f-aa51-2d558ad9c0c1');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: dataToSend,
                headers: {
                    'Accept': 'application/json',
                },
            });

            const result = await response.json();
            if (result.success) {
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    location: '',
                    problemDescription: '',
                    services: []
                });
                setButtonText("Email sent! We'll get back in 1 - 2 days");
                setButtonStyle('button-success');

                setTimeout(() => {
                    setButtonText('Send message');
                    setButtonStyle('');
                }, 3500);
            } else {
                console.error('Form submission error:', result.message);
 
            }
        } catch (error) {
            console.error('Submission error:', error);

        }
    };

    return (
        <div id="contact-section" className="contactPanel">
            <h1>Get in touch</h1>
            <p>Like what you've seen? Get in touch by calling us on +61 450 284 115, reaching us at mark@bonjapianos.com.au or by putting your contact details below.</p>
            <div className="formInput">
                <form onSubmit={handleSubmit} >
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
                    <button type="submit" className={buttonStyle}>{buttonText}</button>
                    {Object.keys(formErrors).map((key) => (
                        formErrors[key] && <div key={key} style={{ color: "red" }}>{formErrors[key]}</div>
                    ))}
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
