import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faServer, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import 'aos/dist/aos.css';
import "./About.css";

export const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });

    return () => AOS.refresh();
  }, []);

  return (
    <section className="all_about_container" id="scroll_about">
      <div className="about-container">
        <div className="title_about">
          <h1>{t('whatIDo.title')}</h1>
          <p>{t('whatIDo.speech')}</p>
        </div>
        <div className="about__template">
          <div className="about-desc desc--1" data-aos="fade-up">
            <div className="about-icon-circle">
              <FontAwesomeIcon icon={faLaptopCode} className="about-icon" />
            </div>
            <div className="about-desc-sub">
              <h3>{t('whatIDo.cardFront.title')}</h3>
              <p>
                {t('whatIDo.cardFront.speech')}
              </p>
            </div>
            {/* <svg className="about_wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#2b9682" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,101.3C560,128,640,160,720,186.7C800,213,880,235,960,250.7C1040,267,1120,277,1200,272C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>                 */}
          </div>

          <div className="about-desc desc--2" data-aos="fade-up">
            <div className="about-icon-circle">
              <FontAwesomeIcon icon={faServer} className="about-icon icon--2" />
            </div>
            <div className="about-desc-sub">
              <h3>{t('whatIDo.cardBack.title')}</h3>
              <p>
                {t('whatIDo.cardBack.speech')}
              </p>
            </div>
            {/* <svg className="about_wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#2b9682" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,101.3C560,128,640,160,720,186.7C800,213,880,235,960,250.7C1040,267,1120,277,1200,272C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>                 */}
          </div>

          <div className="about-desc desc--3" data-aos="fade-up">
            <div className="about-icon-circle">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="about-icon" />
            </div>
            <div className="about-desc-sub">
              <h3>{t('whatIDo.cardDeploy.title')}</h3>
              <p>
                {t('whatIDo.cardDeploy.speech')}
              </p>
            </div>
            {/* <svg className="about_wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#2b9682" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,101.3C560,128,640,160,720,186.7C800,213,880,235,960,250.7C1040,267,1120,277,1200,272C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>         */}
          </div>
        </div>
      </div>
    </section>
  );
};


