import React from "react";
import "../styles/card.scss";
import { PropTypes } from "prop-types";

const navToExternalURL = url => {
  window.location.assign(url);
};

const Card = ({ link, image, title }) => (
  <div className="card-container" style={{ backgroundImage: `url(${image})` }}>
    <div className="overlay"></div>
  </div>
);

Card.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Card;
