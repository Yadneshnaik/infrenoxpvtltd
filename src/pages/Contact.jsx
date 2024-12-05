import React from 'react';

function Contact() {
  const businessHours = {
    Monday: "9:30 AM - 6:00 PM",
    Tuesday: "9:30 AM - 6:00 PM",
    Wednesday: "9:30 AM - 6:00 PM",
    Thursday: "9:30 AM - 6:00 PM",
    Friday: "9:30 AM - 6:00 PM",
    Saturday: "9:30 AM - 6:00 PM",
    Sunday: "Closed",
  };

  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });

  return (
    <div className="container text-center py-5">
      <h2 className="contact-title mb-4">Contact Us</h2>

      <div className="business-hours mb-4">
        <h4>Business Hours:</h4>
        <ul className="list-unstyled">
          {Object.entries(businessHours).map(([day, hours]) => (
            <li
              key={day}
              className={`my-2 ${
                day === "Sunday" ? "text-danger" : day === currentDay ? "fw-bold text-primary" : ""
              }`}
            >
              {day}: <strong>{hours}</strong>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="contact-buttons">
        <a
          href="https://wa.me/8421767210"
          className="btn btn-success me-3 mb-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact on WhatsApp
        </a>
        <a
          href="mailto:infrenox54@gmail.com"
          className="btn btn-primary mb-3"
        >
          Email Us
        </a>
      </div>
    </div>
  );
}

export default Contact;
