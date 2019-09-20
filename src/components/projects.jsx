import React from "react";
import Card from "./card";
import "../styles/projects.scss";
import { blogCode, tinkleCode, scrapprCode, siteCode } from "../../site-config";

import scrappr from "../images/scrappr.png";
import itsatechblog from "../images/itsatechblog.png";
import personalSite from "../images/personalsite.png";
import tinkle from "../images/tinkle.jpg";
import openSource from "../images/open-source.png";

const Projects = () => (
  <section id="portfolio" className="projects-container">
    <h2 className="projects-headline">Projects</h2>
    <div className="projects-grid-container">
      <Card
        className="projects-grid-cell"
        github={blogCode}
        readme="https://google.com"
        image={itsatechblog}
        title="Itsa Tech Blog"
        blurb="Web Dev Tech Blog"
      />
      <Card
        className="projects-grid-cell"
        github={siteCode}
        blurb="You're here!"
        readme="https://google.com"
        image={personalSite}
        title="Personal Site"
      />
      <Card
        className="projects-grid-cell"
        github={tinkleCode}
        blurb="NYC public bathroom locator"
        readme="https://google.com"
        image={tinkle}
        title="Tinkle"
      />
      <Card
        className="projects-grid-cell"
        github={scrapprCode}
        readme="https://google.com"
        image={scrappr}
        title="Scrappr"
      />
      <Card
        className="projects-grid-cell"
        github={scrapprCode}
        readme="https://google.com"
        image={openSource}
        title="Open Source"
      />
    </div>
  </section>
);

export default Projects;
