import React from "react";
import "./Servics.css";
import Humble from "../../img/humble.png";
import Glasses from "../../img/glasses.png";
import HeartEmoji from "../../img/heartemoji.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";

const Servics = () => {
  return (
    <div className="servics">
      {/* left-side */}
      <div className="awesome">
        <span>My Awesome </span>
        <span>Services </span>
        <span>
          Lorem ipsum dolor sit amet consectetur
          <br /> adipisicing elit. Quis natus voluptates, ducimus{" "}
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right-side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design "}
            detail={"Figma, Sketch, Adobe, Photoshop "}
          />
        </div>
        {/* second card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer "}
            detail={"Html, CSS, Javascript, React "}
          />
        </div>
        {/* third card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card emoji={Humble} heading={"UI/UX "} detail={" I am a learner"} />
        </div>
      </div>
    </div>
  );
};

export default Servics;
