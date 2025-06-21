import React from "react";
import { useTranslation } from "react-i18next";
import { projects } from "./projects";
import Slide from "./Slide";
import Slider from "../../shared-components/slider/Slider";
import "./Projects.css";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="container" id="scroll_projects">
      <div className="project-title">
        <h1>{t('projects.title')}</h1>
        <p>{t('projects.speech')}</p>
      </div>

      <div className="project-container">
        {projects.map(({ title, src, alt, desc }) => (
          <Slide
            key={title}
            title={title}
            src={src}
            alt={alt}
            desc={desc}
          />
        ))}
      </div>

      {/* <Slider
        slides={projects.map((p) => ({ ...p, image: p.src }))}
        isOpen={true}
        // onClose={() => }
      /> */}
    </section>

  );
};


