import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, [publicKey]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing:', { serviceId, templateId, publicKey });
      setStatus('error');
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form.current);
      setStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS sendForm error:', error);
      setStatus('error');
    }
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
              <label htmlFor="from_name">Name</label>
              <input type="text" name="from_name" id="from_name" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="reply_to">Email</label>
              <input type="email" name="reply_to" id="reply_to" required placeholder="your.email@example.com" />
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
