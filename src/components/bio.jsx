/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
// eslint-disable
import "../styles/bio.css";

const Bio = () => (
  <div className="bio-container">
    <div className="col-4">left</div>
    <div className="col-8">
      <p>
        I graduated from Providence College in 2016 with a degree in marketing
        and I am currently attending Hofstra University in pursuit of my masters
        degree in Journalism.
      </p>
      <p>
        {" "}
        I hosted a radio show on campus with my friends called “Nose Bleed
        Sports” where I primarily focused on hockey, but covered other sports
        such as baseball, football, basketball and golf.
      </p>
    </div>
  </div>
);

export default Bio;
