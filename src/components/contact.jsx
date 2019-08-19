import React from "react";
import "../styles/contact.css";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const handleSubmit = evt => {
  evt.preventDefault();
  console.log("Clicked!");
};

const Contact = () => (
  <section className="contact-container">
    <h2 className="contact-header">Contact</h2>
    <div className="contact-form-container">
      <p className="contact-blurb">
        Want to get in touch? I&rsquo;d love to hear from you! Here&rsquo;s how
        you can reach me...
      </p>
      <div className="socials">
        <FaLinkedinIn className="social-icon linked-in" />
        <FaGithub className="social-icon github" />
        <FaTwitter className="social-icon twitter" />
      </div>
      <form className="contact-form">
        <input className="contact-input" placeholder="Name" />
        {/* Add email validator */}
        <input className="contact-input" placeholder="Email Address" />
        <textarea
          className="contact-input contact-message"
          placeholder="Message"
        />
        <button
          className="btn-submit"
          onClick={evt => handleSubmit(evt)}
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
