import React from "react";
import "../styles/bio.css";

const Bio = () => (
  <div className="row bio-container">
    <div className="col-lg-4 col-xs-12">
      <div className="box">left</div>
    </div>
    <div className="col-lg-8 col-xs-12">
      <div className="box">
        <p>Paragraph about me</p>
        <p>Paragraph about education/background</p>
        <p>Paragraph about how I started coding</p>
        <p>Paragraph about what I am passionate about (code related)</p>
      </div>
    </div>
  </div>
);

export default Bio;
