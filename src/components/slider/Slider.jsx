import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Slides } from "./Slides";
import { ProjectsViews } from "../views";
import "./Slider.css";

export const Slider = () => {
  return (
    <section className="container" id="scroll_projects">
       <ProjectsViews />
       <div className="carousel-title">
          <h1>Mis Proyectos</h1>
          <hr />
          </div>    
    
      <div className="carousel-container">    
       <Carousel
        arrows
        slidesPerPage={1}
        infinite
        animationSpeed={200}
        centered
        offset={60}
        itemWidth={800}
        slides={ Slides }
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: 400,
          },
        }}
       />
     </div>      
    </section>
    
  );
};


