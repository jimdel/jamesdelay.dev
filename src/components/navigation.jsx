import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../styles/navigation.css";

const showNav = (nav, icon, links) => {
  nav.classList.remove("small-nav");
  nav.classList.add("full-nav");
  icon.classList.add("nav-menu");
  setTimeout(() => {
    links.forEach(link => {
      link.classList.remove("hidden");
    });
  }, 300);
};

const hideNav = (nav, icon, links) => {
  nav.classList.remove("full-nav");
  nav.classList.add("small-nav");
  icon.classList.remove("nav-menu");
  links.forEach(link => {
    link.classList.add("hidden");
  });
};

const Nav = () => {
  const [hidden, setHidden] = useState(true);
  const toggleNav = () => {
    const navContainer = document.querySelector(".nav-container");
    const links = document.querySelectorAll(".nav-link");
    const icon = document.querySelector("#icon");
    if (hidden) {
      showNav(navContainer, icon, links);
      setHidden(false);
    } else {
      hideNav(navContainer, icon, links);
      setHidden(true);
    }
  };
  return (
    <nav className="nav-container small-nav">
      <FaBars
        id="icon"
        onClick={() => {
          toggleNav();
        }}
      />
      <a onClick={() => toggleNav()} className="nav-link hidden" href="#about">
        About
      </a>
      <a
        onClick={() => toggleNav()}
        className="nav-link hidden"
        href="#projects"
      >
        Projects
      </a>
      <a
        onClick={() => toggleNav()}
        className="nav-link hidden"
        href="#contact"
      >
        Contact
      </a>
    </nav>
  );
};

export default Nav;
