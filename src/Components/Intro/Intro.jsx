import React from "react";

import "./Intro.css";
import Github from "../../img/github.png";

import LinkedIn from "../../img/linkedin.png";
export default function Intro() {
  return (
    <div className="intro" id="home">
      <div className="i-left">
      <div className="i-name">
  <span>Hi! I Am</span>
  <span>Gauri Jindal</span>
  <span className="typewriter">And I'm a FrontEnd Developer</span>
</div>
        <div className="i-icons">
          <a href="#">
            <img src={Github} alt="" />
          </a>
          <a href="#">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right"></div>
    </div>
  );
}
