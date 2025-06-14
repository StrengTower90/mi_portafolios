import React from "react";
import { useTranslation } from "react-i18next";
// import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { projects } from "./projects";
import Slide from "./Slide";
import "./Projects.css";

export const Projects = () => {
  // const [offset, setOffset] = useState(20);
  const { t } = useTranslation();
  // const breakpoints = useMemo(() => ({
  //   1200: { slidesPerPage: 1, itemWidth: 0.6 * window.innerWidth },
  //   960: { slidesPerPage: 1, arrows: false, itemWidth: 0.8 * window.innerWidth },
  //   600: { slidesPerPage: 1, arrows: false, itemWidth: 0.8 * window.innerWidth }
  // }), []);

  // useEffect(() => {
  //   if (window.innerWidth <= 960 ) {
  //     setOffset(8)
  //   } else {
  //     setOffset(20)
  //   }
  // }, []);

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
        {/* <Carousel
        arrows
        slidesPerPage={1}
        infinite
        animationSpeed={200}
        centered
        offset={offset}
        itemWidth={800} 
        slides={ Slides }
        breakpoints={breakpoints}
       /> */}
      </div>
    </section>

  );
};


