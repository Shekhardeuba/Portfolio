import React from 'react'
import './Servics.css'
import Humble from "../../img/humble.png";
import glasses from "../../img/glasses.png";
import HeartEmoji from "../../img/heartemoji.png";
import Card from '../Card/Card';


const Servics = () => {
  return (
    <div className="servics">
        {/* left-side */}
        <div className="awesome">
            <span>My Awesome </span>
            <span>services </span>
            <span>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit.
                 Quis natus voluptates, ducimus  </span>
           <button className="button s-button">Download CV</button>      
           <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* right-side */}
        <div className="cards">
            <div>
                <Card
                emoji={HeartEmoji}
                heading={'Design '}
                detail={"Figma, Sketch, Adobe, Photoshop "}
                />
            </div>
        </div>
    </div>
  )
}

export default Servics
