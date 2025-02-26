import React from "react";
import { imagenes } from "../../assets/imagenes";
import "./Slider.css";
// import imagenes from '../../assets/imagenes/';


const slidesInfo = [
  {
    src:imagenes.imgTabla,
    alt: "tabla-dinamicas",
    name: "Tablas Dinamicas",
    desc: "JavaScript, CSS, and html",
    isShowGitHub: false
  },
  {
    src: imagenes.imgCali,
    alt: "formulario_nota_final",
    name: "form Calcula nota final",
    desc: "Php, CSS, and HTML",
    isShowGitHub: false
  },
  {
    src: imagenes.imgEstil,
    alt: "formato_de_estilo",
    name: "Hojas de estilo",
    desc: "CSS, HTML",
    isShowGitHub: false
  },
  {
    src: imagenes.imgGif,
    alt: "GifExperApp",
    name: "Busca Experta imagnes Gif",
    desc: "ReactJs, HTML, CSS, and JavaScript",
    isShowGitHub: false
  },
  {
    src: imagenes.imgHeSpa,
    alt: "Heroes_spa",
    name: "Heroes Spa", 
    desc: "ReactJs, HTML, CSS, JavaScript, and Material UI",
    isShowGitHub: false
  },
  {
    src: imagenes.diplomaGen,
    alt: "diploma_generator",
    name: "Diploma Generator",
    desc: "Expo, React Native, and, React Native Paper UI",
    isShowGitHub: false
  }
];

export const Slides = slidesInfo.map((slide, index) => (
  <div className="slide-container" key={index}>
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <div className="slide-desc-text">
      <span>{ slide.name }</span>
      <span>{slide?.desc}</span>
      </div>
      {slide.isShowGitHub && (
         <a href="https://github.com/StrengTower90?tab=repositories" target="_blank" rel="noreferrer">
         <i className="fab fa-github github"></i>
       </a> 
      )}
    </div>
  </div>
));

