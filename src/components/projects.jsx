import React from "react";
import Card from "./card";
import "../styles/projects.css";
import { blogCode, tinkleCode, scrapprCode, siteCode } from "../../site-config";
import StockImage from "../images/stock.png";
import itsatechblog from "../images/itsatechblog.png";
import personalSite from "../images/personalSite.PNG";

const Projects = () => (
  <section className="projects-container">
    <h2 id="projects" className="projects-headline">
      Projects
    </h2>
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
        image={StockImage}
        title="Tinkle"
      />
      <Card
        className="projects-grid-cell"
        github={scrapprCode}
        readme="https://google.com"
        image={StockImage}
        title="Scrappr"
      />
    </div>
  </section>
);

export default Projects;
