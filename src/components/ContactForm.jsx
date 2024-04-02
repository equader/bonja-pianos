import React, { useState } from 'react';
import './css/contact.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        location: '',
        problemDescription: '',
        services: {
            Tuning: false,
            Servicing: false,
            Cleaning: false,
            Other: false,
        },
    });

    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        location: false,
        problemDescription: false,
        services: false,
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, type, checked, value } = e.target;
        if (type === 'checkbox') {
            setFormData(prevFormData => ({
                ...prevFormData,
                services: {
                    ...prevFormData.services,
                    [name]: checked,
                },
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
    
        if (validateForm()) {
 
            const web3FormData = new FormData();
            web3FormData.append('name', `${formData.firstName} ${formData.lastName}`);
            web3FormData.append('email', formData.email);
            web3FormData.append('phone', formData.phoneNumber);
            web3FormData.append('location', formData.location);
            web3FormData.append('message', formData.problemDescription);
    

            const servicesArray = Object.entries(formData.services)
                .filter(([_, value]) => value)
                .map(([key, _]) => key);
            servicesArray.forEach(service => {
                web3FormData.append('services[]', service);
            });
    
         
            web3FormData.append('apikey', 'process.env.REACT_APP_WEB3FORMS_API_KEY');
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: web3FormData,
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
                        services: {
                            Tuning: false,
                            Servicing: false,
                            Cleaning: false,
                            Other: false,
                        },
                    });
                    setTouched({
                        firstName: false,
                        lastName: false,
                        email: false,
                        phoneNumber: false,
                        location: false,
                        problemDescription: false,
                        services: false,
                    });
                    setSubmitted(false);
                    setIsSubmitted(true); 
                    setTimeout(() => {
                        setIsSubmitted(false);
                    }, 3000); 
    
                } else {
    
                    console.log('Form submission error:', result);
                }
            } catch (error) {
                console.error('Submission error:', error);
            }
        }
    };
    

    const validateForm = () => {
        const fieldsFilled = formData.firstName && formData.lastName && formData.email && formData.phoneNumber && formData.location && formData.problemDescription;
        const oneServiceSelected = Object.values(formData.services).some(value => value);
        return fieldsFilled && oneServiceSelected;
    };

    const getValidationClass = (name) => {
        return `form-control ${submitted && !formData[name] ? 'is-invalid' : ''}`;
    };

    const validateServices = () => {
        return Object.values(formData.services).some(value => value);
    };

    const getCheckboxValidationClass = () => {
        const oneServiceSelected = Object.values(formData.services).some(value => value);
        return `${submitted && !oneServiceSelected ? 'is-invalid' : ''}`;
    };
  


    return (
        <div id="contact-section" className="contactPanel">
            <h1>Get in touch</h1>
            <p>Interested in seeing how we can help? Get in touch by calling us on +61 450 284 115, emailing us at mark@bonjapianos.com.au or by putting your contact details below and we'll be sure to get back to you as soon as we can. </p>
            <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input 
                            type="text" 
                            className={getValidationClass('firstName')}
                            id="firstName" 
                            name="firstName" 
                            value={formData.firstName} 
                            onChange={handleInputChange} 
                            onBlur={handleBlur} 
                            required 
                        />
                        <div className="invalid-feedback">Please enter your first name.</div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input 
                            type="text" 
                            className={getValidationClass('lastName')}
                            id="lastName" 
                            name="lastName" 
                            value={formData.lastName} 
                            onChange={handleInputChange} 
                            onBlur={handleBlur} 
                            required 
                        />
                        <div className="invalid-feedback">Please enter your last name.</div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className={getValidationClass('email')}
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            onBlur={handleBlur} 
                            required 
                        />
                        <div className="invalid-feedback">Please enter your email.</div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input 
                            type="text" 
                            className={getValidationClass('phoneNumber')}
                            id="phoneNumber" 
                            name="phoneNumber" 
                            value={formData.phoneNumber} 
                            onChange={handleInputChange} 
                            onBlur={handleBlur} 
                            required 
                        />
                        <div className="invalid-feedback">Please enter your phone number.</div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-12">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input 
                            type="text" 
                            className={getValidationClass('location')}
                            id="location" 
                            name="location" 
                            value={formData.location} 
                            onChange={handleInputChange} 
                            onBlur={handleBlur} 
                            required 
                        />
                        <div className="invalid-feedback">Please enter your location.</div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-12">
                        <label htmlFor="problemDescription" className="form-label">Problem Description</label>
                        <textarea 
                            className={getValidationClass('problemDescription')}
                            id="problemDescription" 
                            name="problemDescription" 
                            value={formData.problemDescription} 
                            onChange={handleInputChange} 
                            onBlur={handleBlur} 
                            rows="4" 
                            required
                        ></textarea>
                        <div className="invalid-feedback">Please describe your problem.</div>
                    </div>
                </div>

                <div className={`row mb-3 ${getCheckboxValidationClass()}`}>
  <label>
    Services (check all that apply):
  </label>
  {["Tuning", "Servicing", "Cleaning", "Other"].map((service) => (
  <div key={service} className="col-md-3 form-check">
    <input className="form-check-input" type="checkbox" id={service} name={service}
    checked={formData.services[service]} onChange={handleInputChange} onBlur={()=>
    setTouched({ ...touched, services: true })} />
    <label className="form-check-label" htmlFor={service}>
      {service}
    </label>
  </div>
  ))} {submitted && !validateServices() &&
  <div className="invalid-feedback d-block">
    Please select at least one service.
  </div>
  }
</div>

            <div className="row">
                <div className="col-12">
                <div className="button-container">
    <button
        className={`submit-button ${isSubmitted ? 'btn-success' : ''}`}
        type="submit"
        disabled={isSubmitted}
    >
        {isSubmitted ? "Form sent. We'll get back to you in 1 - 2 days" : 'Submit inquiry'}
    </button>
</div>
                </div>
            </div>
            </form>
        </div>
    );
}

export default ContactForm;
