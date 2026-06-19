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

  console.log("========== FORM DEBUG ==========");

  const formData = new FormData(form.current);

  for (const [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

  setStatus("sending");

  try {
    const result = await emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey
    );

    console.log("========== EMAILJS SUCCESS ==========");
    console.log(result);

    setStatus("success");
    form.current.reset();
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};





  return (
    <section id="contact" className="contact-section app-container">
      <div className="contact-layout">
        <div className="contact-info">
          <h2
            className="section-title"
            style={{ marginBottom: '1.5rem' }}
          >
            Let's Connect
          </h2>

          <p className="contact-description">
            Whether you have a project in mind or just want to say hi, my inbox
            is always open. I'll try my best to get back to you!
          </p>
        </div>

        <div className="contact-form-wrapper">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="from_name">Name</label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                placeholder="Your name"
                required
              />
            </div>
    
<input
  type="hidden"
  name="to_email"
  value="ananduchandu696@gmail.com"
/>




            <div className="form-group">
              <label htmlFor="reply_to">Email</label>
              <input
                type="email"
                name="reply_to"
                id="reply_to"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="What's on your mind?"
                required
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="status-msg success">
                Message sent successfully!
              </p>
            )}

            {status === 'error' && (
              <p className="status-msg error">
                Oops! Something went wrong.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;