import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="title">Let's Connect</h2>
        <p className="subtitle">Feel free to drop a message!</p>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="form-input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="form-input"
            required
          />
          <textarea
            placeholder="Your Message"
            className="form-textarea"
            rows="5"
            required
          />
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
