import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo2.mp4";

export const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Ing. Luis Manuel Escalante</h1>
      <p>Desarrollador | Diseñador | Creador de contenido | Emprendor </p>
    </div>
  );
};


