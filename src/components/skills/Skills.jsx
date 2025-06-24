import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import 'aos/dist/aos.css';
import './Skills.css';
import  { SkillsIcons }  from '../../assets';
import SvgIcon from './SvgIcon.jsx';



export const Skills = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true
    })

    return () => AOS.refresh();
  }, []);

  return (
    <section className='all_skill_contain' id="scroll_skills">
      <div className="skill__container">
      <div className="skill_title">
        <h1>{t('skills.title')}</h1>
        <p>{t('skills.speech')}</p>
      </div>        
        <div className="skill__templates">
          {Object.entries(SkillsIcons).map(([key, {src, svg, title, level }], index) => (
            <div
              key={key}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              ata-aos-anchor-placement="top-bottom"
            >
              <SvgIcon src={src} Svg={svg} title={title} level={level} />
            </div>
          ))}
            </div> 
    </div>  
    </section>
    
  )
}
