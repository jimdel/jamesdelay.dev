import React from "react";
import "../styles/card.scss";
import { FaGithub, FaBookOpen } from "react-icons/fa";
import { PropTypes } from "prop-types";

const navToExternalURL = url => {
  window.location.assign(url);
};

const Card = ({ github, readme, image, title, blurb }) => (
  <div
    className="card-container"
    style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay"></div>
  </div>
);

Card.propTypes = {
  github: PropTypes.string.isRequired,
  readme: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired
};

export default Card;
