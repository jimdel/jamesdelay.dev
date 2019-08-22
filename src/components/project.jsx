import React from "react";
import "../styles/project.css";
import { FaGithub, FaBookOpen, FaGlobe } from "react-icons/fa";
import { PropTypes } from "prop-types";

const navToExternalURL = url => {
  window.location.assign(url);
};

const Project = ({ github, readme, url, image, title }) => (
  <div className="project-container">
    <h3 className="project-name">{title}</h3>
    <div>
      <FaGithub onClick={() => navToExternalURL(github)} />
      <FaBookOpen onClick={() => navToExternalURL(readme)} />
      <FaGlobe onClick={() => navToExternalURL(url)} />
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
