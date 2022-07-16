import React from "react";
import { imagenes } from "../../assets/imagenes";
import "./Slider.css";
// import imagenes from '../../assets/imagenes/';


const slidesInfo = [
  {
    src:imagenes.imgTabla,
    alt: "tabla-dinamicas",
    desc: "Tablas Dinamicas",
  },
  {
    src: imagenes.imgCali,
    alt: "formulario_nota_final",
    desc: "form Calcula nota final",
  },
  {
    src: imagenes.imgEstil,
    alt: "formato_de_estilo",
    desc: "Tabla dinamica",
  },
  {
    src: imagenes.imgGif,
    alt: "GifExperApp",
    desc: "Busca Experta imagnes Gif",
  },
  {
    src: imagenes.imgHeSpa,
    alt: "Heroes_spa",
    desc: "Heroes Spa",
  },
];

export const Slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

