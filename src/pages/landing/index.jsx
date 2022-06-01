import React from "react";
import TextSection from "../../components/TextSection";
import LandingImage from "../../components/LandingImage";
import "./style.css";

function Landing() {
  return (
    <div className="containerMain">
      <TextSection />
      <LandingImage />
    </div>
  );
}

export default Landing;
