import React, { useState } from "react";
import "../styles/contact.scss";
import { FaLinkedinIn, FaGithub, FaTwitter, FaFilePdf } from "react-icons/fa";
import { linkedIn, github, resume } from "../../site-config";

const handleSubmit = (evt, message) => {
  evt.preventDefault();
  console.log(message);
};

const isEmail = email => {
  const input = document.querySelector("#email");
  let isValid = false;
  if (email.indexOf("@") === -1) {
    input.classList.add("error");
  } else {
    input.classList.remove("error");
    isValid = true;
  }
  return isValid;
};

const isDisabled = (email, message, toggle) => {
  const isValidEmail = isEmail(email);
  const isValidMessage = message.length >= 15;
  if (isValidEmail && isValidMessage) {
    toggle(false);
  }
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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
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
        <form className="contact-form">
          <input
            id="email"
            onChange={evt => setEmail(evt.target.value)}
            onBlur={() => isEmail(email)}
            className="contact-input"
            placeholder="Email Address"
          />
          <textarea
            onChange={evt => {
              setMessage(evt.target.value);
            }}
            className="contact-input contact-message"
            placeholder="Message"
          />
          <button
            className="btn-submit"
            onClick={evt => handleSubmit(evt, message)}
            type="submit"
            disabled={disabled}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
