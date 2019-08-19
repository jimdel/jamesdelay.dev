import React from "react";
import Card from "./card";
import "../styles/projects.css";
import StockImage from "../images/stock.png";

const Projects = () => (
  <section className="projects-container">
    <h2 className="projects-headline">Projects</h2>
    <div className="projects-grid-container">
      <Card
        className="projects-grid-cell"
        github="https://github.com/JDeLay-JR"
        readme="https://google.com"
        image={StockImage}
        title="Test Title"
      />
      <Card
        className="projects-grid-cell"
        github="https://github.com/JDeLay-JR"
        readme="https://google.com"
        image={StockImage}
        title="Test Title"
      />
      <Card
        className="projects-grid-cell"
        github="https://github.com/JDeLay-JR"
        readme="https://google.com"
        image={StockImage}
        title="Test Title"
      />
      <Card
        className="projects-grid-cell"
        github="https://github.com/JDeLay-JR"
        readme="https://google.com"
        image={StockImage}
        title="Test Title"
      />
    </div>
  </section>
);

export default Projects;
