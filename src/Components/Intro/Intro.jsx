import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

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
            I am right side.
        </div>
    </div>
  )
}

export default Intro
