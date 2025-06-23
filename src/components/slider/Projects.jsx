import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "./projects";
import { projectsSlides } from "../../utils/projectsSlides.js";
import ProjectCard from "./ProjectCard.jsx";
import Slider from "../../shared-components/slider/Slider";
import "./Projects.css";

export const Projects = () => {
  const { t } = useTranslation();
  const [ isOpenSlider, setIsOpenSlider ] = useState(false);
  const [project, setProject] = useState(null);

  const handleGetProject = (selectedName) => {
    const info = t(`projects.${selectedName}`, { returnObjects: true });
    const slides = projectsSlides[selectedName];
    const projProps = projects.find((item) => item.alt === selectedName);


    setProject({
      ...info,
      slides: slides,
      isShowCode: projProps.isShowCode,
      isOpenApp: projProps.isOpen
    });

    setIsOpenSlider(true);
  };

  return (
    <section className="container" id="scroll_projects">
      <div className="project-title">
        <h1>{t('projects.title')}</h1>
        <p>{t('projects.speech')}</p>
      </div>

      <div className="project-container">
        {projects.map(({ title, src, alt, desc }) => (
          <ProjectCard
            key={title}
            title={title}
            src={src}
            alt={alt}
            desc={desc}
            handleGetProject={handleGetProject}
          />
        ))}
      </div>

      <Slider
        {...project}
        isOpen={isOpenSlider}
        onClose={() => setIsOpenSlider(false)}
      />
    </section>

  );
};


