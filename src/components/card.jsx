import React from "react";
import "../styles/card.css";
import { FaGithub, FaBookOpen } from "react-icons/fa";
import { PropTypes } from "prop-types";

const navToExternalURL = url => {
  window.location.assign(url);
};

const Card = ({ github, readme, image, title }) => (
  <div className="card-container" style={{ backgroundImage: `url(${image})` }}>
    <div className="overlay">
      <h3 className="project-name">{title}</h3>
      <h4 className="project-blurb">This is a fake blurb</h4>
    </div>
    <div className="card-button-container">
      <FaGithub
        onClick={() => navToExternalURL(github)}
        style={{ fontSize: `3rem`, cursor: `pointer` }}
      />
      <FaBookOpen
        onClick={() => navToExternalURL(readme)}
        style={{ fontSize: `3rem`, cursor: `pointer` }}
      />
    </div>
  </div>
);

Card.propTypes = {
  github: PropTypes.string.isRequired,
  readme: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Card;
