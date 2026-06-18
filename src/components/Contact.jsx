import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          setStatus('success');
          form.current.reset();
      }, (error) => {
          setStatus('error');
      });
  };

  return (
    <section id="contact" className="contact-section app-container">
      <div className="contact-layout">
        <div className="contact-info">
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Let's Connect</h2>
          <p className="contact-description">
            Whether you have a project in mind or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
        </div>

        <div className="contact-form-wrapper">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input type="text" name="user_name" id="user_name" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input type="email" name="user_email" id="user_email" required placeholder="your.email@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="5" required placeholder="What's on your mind?"></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && <p className="status-msg success">Message sent successfully!</p>}
            {status === 'error' && <p className="status-msg error">Oops! Something went wrong.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
