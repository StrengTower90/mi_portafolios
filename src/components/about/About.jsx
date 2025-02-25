import React from "react";
import "./About.css";
import { AboutViews } from "../views";
import imgAbout from '../../assets/img/solutions.png'
import imgStudy from '../../assets/img/studying.png';
import imgConst from '../../assets/img/entrepreneur.png';

export const About = () => {
  return (
    <section className="all_about_container">
       <AboutViews />
      <div className="about-container" id="scroll_about">
      <div className="title_about">
        <h1>Sobre Mí</h1>
        <hr />
      </div> 
      <hr />
     <div className="about__template">
      <div className="about-desc desc--1">
         <img
            className="about__img"
            src={ imgAbout }
            alt="soluciones"
          /> 
        <div className="about-desc-sub">
          <h3>Soluciones</h3>
            <p>
              El poder brindar soluciones competentes es una de las actividades que mas disfruto hacer, desarrollar y diseñar soluciones web o software.  enfocadas en solventar necesidades. es mas que una labor para mi, es una pasión.
            </p>
        </div>
        {/* <svg className="about_wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#0099ff" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,101.3C560,128,640,160,720,186.7C800,213,880,235,960,250.7C1040,267,1120,277,1200,272C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>                 */}
      </div>

      <div className="about-desc desc--2">
         <img
            className="about__img"
            src={ imgStudy }
            alt="studiar"
          /> 
        <div className="about-desc-sub">
          <h3>Autodidacta</h3>
             <p>
              una de las cualidades que me caracterizan, es que constantemente me gusta documentarme estudiar y aprender las nuevas tecnologias. ya que el motor fundamental para ser competente en este segmento digital es el constante aprendizaje.
            </p>
        </div>
        {/* <svg className="about_wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#2b9682" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,101.3C560,128,640,160,720,186.7C800,213,880,235,960,250.7C1040,267,1120,277,1200,272C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>                 */}
      </div>

      <div className="about-desc desc--3">
         <img
            className="about__img"  
            src={ imgConst }
            alt="emtrepenur"
          /> 
        <div className="about-desc-sub">
          <h3>Emprendedor</h3>
            <p>
              a cuasa de que vivimos en mundo en constante cambio, una de las bases primordiales es la capacidad para adaptarnos.  estoy de acuerdo, por lo cual vive en mi la latente determinacion de superarme para superar a mi familia. 
            </p>
        </div>
        {/* <svg className="about_wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#fe5248" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,101.3C560,128,640,160,720,186.7C800,213,880,235,960,250.7C1040,267,1120,277,1200,272C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>         */}
     </div>
    </div>
    </div>
    </section>
  );
};


