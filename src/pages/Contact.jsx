import React from 'react';

function Contact() {
  return (
    <div className="container text-center py-5">
      <h2 className="contact-title mb-4">Contact Us</h2>
      <div className='business-hours mb-4'>
        <h4>Business Hours:</h4>
        <p>Monday - Saturday: <strong>9:30 AM - 6:00 PM</strong></p>
        <p>Sunday: <strong>Closed</strong></p>
        <a
          href="https://wa.me/8421767210"
          className="btn btn-success me-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact on WhatsApp
        </a>
        <a
          href="mailto:infrenox54@gmail.com"
          className="btn btn-primary"
        >
          Email Us
        </a>
      </div>
    </div>
  );
}

export default Contact;
