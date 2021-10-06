import React from "react";
import Button from "./button";
import "./heroSection.css";
const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}

      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" btnStyle="btn--outline" btnSize="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" btnSize="btn--large">
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
