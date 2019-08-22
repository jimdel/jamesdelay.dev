import React from "react";
import "../styles/project.css";
import { FaGithub, FaBookOpen, FaGlobe } from "react-icons/fa";
import { PropTypes } from "prop-types";

const navToExternalURL = url => {
  window.location.assign(url);
};

const hiddenProp = prop => {
  if (!prop) {
    return "hidden";
  }
  return "social-icon globe";
};

const Project = ({ github, readme, url, image, title }) => (
  <div className="project-container">
    <h3 className="project-name">{title}</h3>
    <div className="icon-container">
      <FaGithub
        className="social-icon github"
        onClick={() => navToExternalURL(github)}
      />
      <FaBookOpen
        className="social-icon readme"
        onClick={() => navToExternalURL(readme)}
      />
      <FaGlobe
        className={hiddenProp(url)}
        onClick={() => navToExternalURL(url)}
      />
    </div>
    <img className="project-img" alt={title} src={image} />
  </div>
);

Project.propTypes = {
  github: PropTypes.string.isRequired,
  readme: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Project;
