import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Slides } from "./Slides";
import "./Slider.css";

export const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Mis Proyectos</h2>
        <div className="carousel-inner">
          <h5>Repositorios github</h5>
          <a href="https://github.com/StrengTower90?tab=repositories" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a> 
          
        </div>         
      </div>

      <Carousel
        arrows
        slidesPerPage={1}
        infinite
        animationSpeed={200}
        centered
        offset={40}
        itemWidth={400}
        slides={ Slides }
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: 250,
          },
        }}
      />
    </div>
  );
};


