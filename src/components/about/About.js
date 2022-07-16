import React from "react";
import "./About.css";
import imgAbout from '../../assets/img/study.jpg'

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Sobre mi</h3>
        <p>
          El poder brindar soluciones competentes es una de las actividades que mas disfruto hacer, desarrollar y diseñar soluciones web o software.  enfocadas en solventar necesidades. es mas que una labor para mi, es una pasión.
        </p>
      </div>
      <div className="about-img">
        <img
          src={ imgAbout }
          alt="about"
        />
      </div>
    </div>
  );
};


