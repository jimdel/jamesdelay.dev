import React from "react";
import "../styles/portfolio.css";
import { blogCode, tinkleCode, scrapprCode, siteCode } from "../../site-config";
import StockImage from "../images/stock.png";
import techblog from "../images/techblog.png";
import scrappr from "../images/scrappr.png";
import personal from "../images/personal.png";
import Project from "./project";

const Portfolio = () => (
  <section className="projects-container">
    <h2 id="projects" className="projects-headline">
      Projects
    </h2>
    <div className="projects-grid-container">
      <Project
        title="Test"
        github={siteCode}
        readme="https://google.com"
        url="#"
        image={personal}
      />
      <Project
        title="Test"
        github={siteCode}
        readme="https://google.com"
        url="#"
        image={personal}
      />
      <Project
        title="Test"
        github={siteCode}
        readme="https://google.com"
        url="#"
        image={personal}
      />
      <Project
        title="Test"
        github={siteCode}
        readme="https://google.com"
        url="#"
        image={personal}
      />
    </div>
  </section>
);

export default Portfolio;
