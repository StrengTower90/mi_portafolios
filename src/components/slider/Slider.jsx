import React, { useState, useEffect } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Slides } from "./Slides";
import { ProjectsViews } from "../views";
import "./Slider.css";

export const Slider = () => {
  const [itemWidth, setItemWidth] = useState(800);

  useEffect(() => {
    const updateItemWidth = () => {
      if (window.innerWidth < 600) {
        setItemWidth(window.innerWidth * 0.9);
      } else if (window.innerWidth < 960) {
        setItemWidth(window.innerWidth * 0.8);
      } else if (window.innerWidth < 1200) {
        setItemWidth(window.innerWidth * 0.6) 
      } else {
        setItemWidth(800);
      }
    }

    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);
    return () => window.removeEventListener("resize", updateItemWidth);
  },[]);

  return (
    <section className="container" id="scroll_projects">
       {/* <ProjectsViews /> */}

       <div className="carousel-title">
          <h1>Mis Proyectos</h1>
          {/* <hr /> */}
          </div>    
    
      <div className="carousel-container">    
       <Carousel
        arrows
        slidesPerPage={1}
        infinite
        animationSpeed={200}
        centered
        offset={20}
        itemWidth={itemWidth} /* Adjusted for responsiveness */
        slides={ Slides }
        breakpoints={{
          1200: {
            slidesPerPage: 1,
            // arrows: false,
            itemWidth: "60vw", /* Adjusted */
          },
          960: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: "80vw"
          },
          600: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: "90vw"
          }
        }}
       />
     </div>      
    </section>
    
  );
};


