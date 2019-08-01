import React from "react";
import "../styles/bio.css";

const Bio = () => (
  <section className="row grid-container">
    <div className="moveInLeft flex-center grid-cell">
      <figure>
        <img
          alt="me!"
          className="headshot"
          src="https://tinyurl.com/y5gt5uaq"
        />
      </figure>
    </div>
    <div className="moveInRight grid-cell">
      <h2>About Me</h2>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className="">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </section>
);

export default Bio;
