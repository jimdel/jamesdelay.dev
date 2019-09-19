import React, { useState } from "react";
import "../styles/contact.scss";
import { FaLinkedinIn, FaGithub, FaTwitter, FaFilePdf } from "react-icons/fa";
import { linkedIn, github, resume } from "../../site-config";

const isEmail = email => {
  const input = document.querySelector("#email");
  let isValid = false;
  if (email.length === 0) {
    isValid = false
  } else if (email.indexOf("@") === -1) {
    input.classList.add("invalid-email");
  } else {
    input.classList.add("valid-email");
    isValid = true;
  }
  return isValid;
};


const navToLink = type => {
  let url;
  switch (type) {
    case "linkedIn":
      url = linkedIn;
      break;
    case "github":
      url = github;
      break;
    case "twitter":
      url = "https://twitter.com";
      break;
    case "resume":
      url = resume;
      break;
    default:
      url = "#";
      break;
  }
  window.location.href = url;
};

const Contact = () => {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState(true);
  return (
    <section className="contact-container">
      <h2 id="contact" className="contact-header">
        Contact
      </h2>
      <div className="contact-form-container">
        <p className="contact-blurb">
          Want to get in touch? I&rsquo;d love to hear from you! Here&rsquo;s
          how you can reach me...
        </p>
        <div className="socials">
          <FaLinkedinIn
            onClick={() => navToLink("linkedIn")}
            className="social-icon linked-in"
          />
          <FaGithub
            onClick={() => navToLink("github")}
            className="social-icon github"
          />
          <FaTwitter
            onClick={() => navToLink("twitter")}
            className="social-icon twitter"
          />
          <FaFilePdf
            onClick={() => navToLink("resume")}
            className="social-icon pdf"
          />
        </div>
        <form className="contact-form" action="https://formspree.io/jdelay.jr@gmail.com" method="POST" >
          <input
            id="email"
            name="email"
            onChange={(evt) => setEmail(evt.target.value)}
            // onBlur={(evt => isEmail(email)}
            className="contact-input"
            placeholder="Email Address"
          />
          <input
            id="name"
            name="name"
            className="contact-input"
            placeholder="Email Address"
          />
          <textarea
            name="message"
            className="contact-input contact-message"
            placeholder="Message"
          />
          <button
            className="btn-submit"
            type="submit"
            // disabled={isValidEmail}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
