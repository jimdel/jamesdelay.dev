/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from "react";
import { FaBars } from "react-icons/fa";
import { blogLink, resume } from "../../site-config";
import "../styles/navigation.scss";

const LINKS = ["about", "portfolio", "resume", "blog", "contact"];

const handleLinkClick = link => {
  switch (link) {
    case "resume":
      window.location.href = resume;
      break;
    case "blog":
      window.location.href = blogLink;
      break;
    default:
      window.location.hash = link;
  }
};

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-content">
        {/* <FaBars></FaBars> */}
        <svg
          // eslint-disable-next-line no-return-assign
          onClick={() => (window.location.hash = "/#home")}
          className="logo"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M251.953 328.613C251.953 330.762 253.613 332.52 255.615 332.52H345.947C347.949 332.52 349.609 330.762 349.609 328.613V305.176C349.609 303.027 347.949 301.27 345.947 301.27H255.615C253.613 301.27 251.953 303.027 251.953 305.176V328.613ZM156.787 331.592L250.537 252.979C252.393 251.416 252.393 248.535 250.537 246.973L156.787 168.408C156.221 167.927 155.529 167.618 154.793 167.519C154.057 167.419 153.307 167.533 152.634 167.846C151.96 168.16 151.391 168.66 150.993 169.288C150.596 169.915 150.387 170.644 150.391 171.387V202.002C150.391 203.174 150.879 204.248 151.807 204.98L205.42 250L151.807 295.02C151.37 295.385 151.018 295.84 150.773 296.354C150.529 296.868 150.398 297.429 150.391 297.998V328.613C150.391 331.934 154.248 333.74 156.787 331.592ZM429.688 54.6875H70.3125C61.6699 54.6875 54.6875 61.6699 54.6875 70.3125V429.688C54.6875 438.33 61.6699 445.312 70.3125 445.312H429.688C438.33 445.312 445.312 438.33 445.312 429.688V70.3125C445.312 61.6699 438.33 54.6875 429.688 54.6875ZM410.156 410.156H89.8438V89.8438H410.156V410.156Z"
            fill="white"
          />
        </svg>
        <ul className="links-container">
          {LINKS.map(link => (
            <li
              key={link}
              onClick={() => handleLinkClick(link)}
              className="link"
            >
              <p>{link}</p>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
