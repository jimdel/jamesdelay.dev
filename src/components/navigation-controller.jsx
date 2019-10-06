import React, { useState, useEffect } from "react";
import { blogLink, resume } from "../../site-config";
import StandardNavigation from "./standard-navigation";
import MobileNavigation from "./mobile-navigation";

const LINKS = ["about", "portfolio", "resume", "blog", "contact"];

const handleLinkClick = link => {
  switch (link) {
    case "home":
      window.location.href = `${__dirname}#home`;
      break;
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

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    // Get initial width
    setIsMobile(window.innerWidth < 1000);
    // Watch for window resizing
    window.addEventListener("resize", evt => {
      const { innerWidth } = evt.target;
      return innerWidth < 1000 ? setIsMobile(true) : setIsMobile(false);
    });
  });
  return isMobile ? (
    <MobileNavigation links={LINKS} clickHandler={handleLinkClick} />
  ) : (
    <StandardNavigation links={LINKS} clickHandler={handleLinkClick} />
  );
};

export default Navigation;
