import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Cover.css";
import codingjson from '../../assets/json/coding.json';

export const Cover = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });

    return () => AOS.refresh();
  }, []);

  return (
    <header className="heroe_container">
      <svg className="cover_bloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <path fill="#3b9684d4" d="M47.1,-67.9C61.8,-63.9,74.9,-52,77.5,-37.9C80.1,-23.7,72.3,-7.2,67.1,7.7C61.9,22.6,59.4,36,52.1,46.2C44.9,56.5,32.9,63.7,20.2,66.3C7.5,69,-5.8,67,-17.5,62.3C-29.2,57.6,-39.3,50.2,-47.3,41C-55.4,31.7,-61.4,20.7,-63.6,8.8C-65.7,-3.1,-64.1,-15.8,-58.6,-26.4C-53.2,-36.9,-43.8,-45.3,-33.4,-51.2C-23,-57.1,-11.5,-60.4,2.4,-64.1C16.2,-67.8,32.5,-71.8,47.1,-67.9Z" transform="translate(100 100)" />
      </svg>
      <div className="cover-container">
        <div className="cover_title">
          <h1 data-aos="fade-right">
            {t('header.greetings')}
          </h1>
          <p className="cover_headline" data-aos="fade-left">
            {t('header.speech')}
          </p>
        </div>
        <div className="lottie-area">
          <Lottie
            animationData={codingjson}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
    </header>
  );
};


