import React from "react";
import Typing from "react-typing-animation";
import "../styles/bio.scss";

const Bio = () => (
  <section id="about" className="grid-container">
    <div className="moveInLeft flex-center grid-cell">
      <img alt="me!" className="headshot" src="https://tinyurl.com/y5gt5uaq" />
    </div>
    <div className="moveInRight grid-cell">
      <h2 className="about-header">About Me</h2>
      <Typing speed={75} delay={1000}>
        <p className="about-sub-header">Coffee Aficionado</p>
        <Typing.Delay ms={3000} />
        <Typing.Backspace count={"Coffee Aficionado".length} />
        <p className="about-sub-header">Fantasy Nerd</p>
        <Typing.Delay ms={3000} />
        <Typing.Backspace count={"Fantasy Nerd".length} />
        <p className="about-sub-header">JavaScript Developer</p>
      </Typing>
      <p className="">
        I first discovered coding while in middle school. I dabbled with HTML
        and CSS; creating simple web pages that are now lost in the depths of my
        old hard drive. For years thereafter I continued to play around with
        code on my local machine but I thought of it only as a hobby. It wasn’t
        until I was pursuing my Master’s Degree of Business Management &
        Administration that I began to rediscover my passion for code.
      </p>
      <p>
        At that time I was working as a carpenter during the day while taking
        classes at night. While at work I realized how much I loved to build and
        create things. My favorite part of the job was coming up with creative
        ways to solve the difficult problems my team and I faced on a daily
        basis. I decided to combine this passion for building & creating with my
        passion for code. This led me to The Fullstack Academy of Code where I
        studied software engineering & web development. During my time at The
        Fullstack Academy of Code I deployed a team project built on the NERD
        stack that utilized Socket.io, React, and Google Firebase Storage to
        create a real time photo mosaic for events and gatherings. In addition,
        I was part of a team that developed a mobile app using React Native &
        Google’s Geocode API to find a user the nearest public restroom in New
        York City.
      </p>
    </div>
  </section>
);

export default Bio;
