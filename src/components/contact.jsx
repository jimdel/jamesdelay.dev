import React, { useState } from "react";
import "../styles/contact.scss";
import {
  FaLinkedinIn,
  FaGithub,
  FaCodepen,
  FaFilePdf,
  FaDribbble
} from "react-icons/fa";
import { linkedIn, github, resume, dribbble, codepen } from "../../site-config";

const navToLink = type => {
  let url;
  switch (type) {
    case "linkedIn":
      url = linkedIn;
      break;
    case "github":
      url = github;
      break;
    case "dribbble":
      url = dribbble;
      break;
    case "codepen":
      url = codepen;
      break;
    case "resume":
      url = resume;
      break;
    default:
      url = "#";
      break;
  }
  window.location.href = url;
  return null;
};

const doValidateEmail = str => {
  const EMAIL_EL = document.querySelector("#email");
  if (str.length === 0 || str.indexOf("@") === -1) {
    EMAIL_EL.classList.add("invalid-email");
    EMAIL_EL.classList.remove("valid-email");
    return false;
  }
  EMAIL_EL.classList.remove("invalid-email");
  EMAIL_EL.classList.add("valid-email");
  return true;
};

const Contact = () => {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
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
          <FaDribbble
            onClick={() => navToLink("dribbble")}
            className="social-icon dribbble"
          />
          <FaCodepen
            onClick={() => navToLink("codepen")}
            className="social-icon codepen"
          />
          <FaFilePdf
            onClick={() => navToLink("resume")}
            className="social-icon pdf"
          />
        </div>
        <form
          className="contact-form"
          action="https://formspree.io/jdelay.jr@gmail.com"
          method="POST"
        >
          <input
            id="email"
            name="email"
            onChange={evt => setEmail(evt.target.value)}
            onBlur={() => {
              return doValidateEmail(email)
                ? setDisabled(false)
                : setDisabled(true);
            }}
            className="contact-input"
            placeholder="Email Address"
          />
          <input
            id="name"
            name="name"
            className="contact-input"
            placeholder="Name"
          />
          <textarea
            name="message"
            className="contact-input contact-message"
            placeholder="Message"
          />
          <button
            className={disabled ? "btn-disabled" : "btn-submit"}
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
