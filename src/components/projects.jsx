import React from "react";
import Card from "./card";
import "../styles/projects.scss";
import { blogCode, tinkleCode, scrapprCode, siteCode } from "../../site-config";

import scrappr from "../images/scrappr.png";
import itsatechblog from "../images/itsatechblog.png";
import personalSite from "../images/personalsite.png";
import tinkle from "../images/tinkle.jpg";

const Projects = () => (
  <section id="portfolio" className="projects-container">
    <h2 className="projects-headline">Projects</h2>
    <div className="projects-grid-container">
      <Card
        className="projects-grid-cell"
        link={blogCode}
        image={itsatechblog}
        title="Itsa Tech Blog"
      />
      <Card
        className="projects-grid-cell"
        link={siteCode}
        image={personalSite}
        title="Personal Site"
      />
      <Card
        className="projects-grid-cell"
        link={tinkleCode}
        image={tinkle}
        title="Tinkle"
      />
      <Card
        className="projects-grid-cell"
        link={scrapprCode}
        image={scrappr}
        title="Scrappr"
      />
    </div>
  </section>
);

export default Projects;
