import React from "react";
import "../styles/portfolio.css";
import {
  blogCode,
  blogLink,
  scrapprCode,
  scrapprLink,
  siteCode,
  tinkleCode
} from "../../site-config";
import techblog from "../images/techblog.png";
import scrappr from "../images/scrappr.png";
import personal from "../images/personal.png";

import Project from "./project";

const Portfolio = () => (
  <section className="portfolio-container">
    <h2 id="projects" className="portfolio-headline">
      Projects
    </h2>
    <div className="portfolio-grid-container">
      <Project
        title="Portfolio Site"
        github={siteCode}
        readme="https://google.com"
        url="#"
        image={personal}
      />
      <Project
        title="Itsa Tech Blog"
        github={blogCode}
        readme="https://google.com"
        url={blogLink}
        image={techblog}
      />
      <Project
        title="Scrappr"
        github={scrapprCode}
        readme="https://google.com"
        url={scrapprLink}
        image={scrappr}
      />
      <Project
        title="Tinkle: The App"
        github={tinkleCode}
        readme="https://google.com"
        url={false}
        image={personal}
      />
    </div>
  </section>
);

export default Portfolio;
