import React, { useState } from 'react';

export default function Contact() {
  // 1. Set up state to track name, phone, and message
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    message: '' 
  });

  
  const whatsappNumber = "+256758919919"; 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    
    
    const messageTemplate = `Hello Miabbie! %0A%0A` +
      `*New Inquiry from Website*%0A` +
      `--------------------------%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Message:* ${formData.message}`;
    
    
    window.open(`https://wa.me/${whatsappNumber}?text=${messageTemplate}`, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h2>Contact Miabbie</h2>
          <div className="gold-accent"></div>
          <p>Book your appointment or inquire about our services in Kampala.</p>
        </div>

        <form className="contact-form" onSubmit={handleSend}>
          <div className="input-row">
            {/* NAME FIELD */}
            <div className="input-group">
              <input 
                type="text" 
                name="name" 
                required 
                placeholder=" " 
                value={formData.name}
                onChange={handleInputChange} 
              />
              <label>Full Name</label>
            </div>

            {/* PHONE FIELD (Replaced Email) */}
            <div className="input-group">
              <input 
                type="tel" 
                name="phone" 
                required 
                placeholder=" " 
                value={formData.phone}
                onChange={handleInputChange}
              />
              <label>Phone Number (WhatsApp)</label>
            </div>
          </div>

          {/* MESSAGE FIELD */}
          <div className="input-group">
            <textarea 
              name="message" 
              rows="5" 
              required 
              placeholder=" " 
              value={formData.message}
              onChange={handleInputChange}
            />
            <label>Which appointment are you booking for?</label>
          </div>

          <button className="submit-btn" type="submit">
            Send Message via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}