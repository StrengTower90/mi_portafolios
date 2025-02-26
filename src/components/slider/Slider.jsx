import React, { useEffect, useState, useMemo } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Slides } from "./Slides";
import "./Slider.css";

export const Slider = () => {
  const [offset, setOffset] = useState(20);
  const breakpoints = useMemo(() => ({
    1200: { slidesPerPage: 1, itemWidth: 0.6 * window.innerWidth },
    960: { slidesPerPage: 1, arrows: false, itemWidth: 0.8 * window.innerWidth },
    600: { slidesPerPage: 1, arrows: false, itemWidth: 0.8 * window.innerWidth }
  }), []);

  useEffect(() => {
    if (window.innerWidth <= 960 ) {
      setOffset(8)
    } else {
      setOffset(20)
    }
  }, []);

  return (
    <section className="container" id="scroll_projects">
       <div className="carousel-title">
          <h1>Mis Proyectos</h1>
          </div>    
    
      <div className="carousel-container">    
       <Carousel
        arrows
        slidesPerPage={1}
        infinite
        animationSpeed={200}
        centered
        offset={offset}
        itemWidth={800} /* Adjusted for responsiveness */
        slides={ Slides }
        breakpoints={breakpoints}
       />
     </div>      
    </section>
    
  );
};


