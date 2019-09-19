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
  />
);

Card.propTypes = {
  github: PropTypes.string.isRequired,
  readme: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired
};

// <div className="card-button-container">
{
  /* <FaGithub
onClick={() => navToExternalURL(github)}
style={{ fontSize: `3rem`, cursor: `pointer` }}
/>
<FaBookOpen
onClick={() => navToExternalURL(readme)}
style={{ fontSize: `3rem`, cursor: `pointer` }}
/>
</div> */
}

export default Card;
