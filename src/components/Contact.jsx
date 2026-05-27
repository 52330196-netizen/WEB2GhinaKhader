import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to localStorage
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({
      ...formData,
      timestamp: new Date().toLocaleString()
    });
    localStorage.setItem('messages', JSON.stringify(messages));
    
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="section-description">We'd love to hear from you. Get in touch with us today!</p>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <div className="contact-detail">
            <h3>📧 Email</h3>
            <p><a href="mailto:info@traveldestination.com">info@traveldestination.com</a></p>
          </div>

          <div className="contact-detail">
            <h3>📱 Phone</h3>
            <p><a href="tel:+961793770072">+961 79 377 072</a></p>
          </div>

          <div className="contact-detail">
            <h3>📍 Address</h3>
            <p>Tripoly, Lebanon</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          
          {submitted && (
            <div className="success-message">
              ✅ Message sent successfully! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <div className="form-group">
              <button type="submit" className="submit-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;