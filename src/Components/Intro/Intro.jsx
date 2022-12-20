import React from 'react'
import { createRoot } from 'react-dom/client'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';


const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Shekhar Deuba </span>
                <span>Frontend development practitioner 
                    with strong verbal written communication 
                    skills with analytic skills</span>
            </div>

            <button className="button 
            i-button">Hire me </button>
            <div className="i-icons">
                <a href="https://github.com/Shekhardeuba">
                <img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/shekhar-deuba-218509121/"><img src={LinkedIn} alt="" /></a>
                <a href="https://www.instagram.com/shekhardeuba/"><img src={Instagram} alt="" /></a>
            </div>
        </div>

        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <div>
                <FloatingDiv image={Crown}/>
            </div>
        </div>
    </div>
  )
}

export default Intro
