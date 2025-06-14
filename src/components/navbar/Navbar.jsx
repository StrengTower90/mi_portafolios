import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleUp, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { ScrollThem } from "./ScrollThem";
import arrow from '../../assets/arrow.svg'
import menu from '../../assets/menu.svg'
import logo from '../../assets/img/logo.png'
import SetShowMenu from "../../helpers/JavaApp";
import LanguageDropdown from "./LanguageDropdown";



export const Navbar = ({ isScrolling }) => {
  const { t } = useTranslation();
  const { toTheTop } = ScrollThem(); 

  useEffect(() => {
    SetShowMenu();
  }, []);

  return (
    <>
      <nav className={`menu ${isScrolling > 20 ? "scrolling" : null}`}>
        <section className="menu_container">
          <div className="menu_logo" onClick={toTheTop}>
            {/* <img src={logo}  /> */}
            {/* <FontAwesomeIcon icon={faArrowCircleUp} className="arrow-top" /> */}
            <h3 className={`logo-1 ${isScrolling > 20 ? 'logo-1-scroll' : null}`}>Luis</h3>
            <h3 className={`logo-2 ${isScrolling > 20 ? 'logo-2-scroll' : null}`}>Escalante.</h3>
          </div>

          <ul className="menu_links">
            <li className="menu_item">
              <a href="#scroll_about" className="menu_link">
                {t('navbar.option1')}
                <FontAwesomeIcon icon={faAngleRight} className="menu_arrow" />
              </a>
            </li>
            <li className="menu_item menu_item--show">
              <a href="#scroll_skills" className="menu_link">
                {t('navbar.option2')} 
                <FontAwesomeIcon icon={faAngleRight} className="menu_arrow" />
              </a>
              {/* <ul className="menu_nesting">
                <li className="menu_inside">
                   <a href="#" className="menu_link menu_link--inside">About1</a>
                </li>
                <li className="menu_inside">
                   <a href="#" className="menu_link menu_link--inside">About2</a>
                </li>
                <li className="menu_inside">
                   <a href="#" className="menu_link menu_link--inside">About3</a>
                </li>
              </ul>               */}
            </li>

            <li className="menu_item menu_item--show">
              <a href="#scroll_projects" className="menu_link">
                  {t('navbar.option3')} 
                  <FontAwesomeIcon icon={faAngleRight} className="menu_arrow" />
              </a>
              {/* <ul className="menu_nesting"> 
                <li className="menu_inside">
                   <a href="#" className="menu_link menu_link--inside">Proyectos1</a>
                </li>
                <li className="menu_inside">
                   <a href="#" className="menu_link menu_link--inside">Proyectos2</a>
                </li>
                <li className="menu_inside">
                   <a href="#" className="menu_link menu_link--inside">Proyectos3</a>
                </li>
              </ul> */}
            </li>

            <li className="menu_item menu-item--show">
              <a href="#scroll_process" className="menu_link">
                {t('navbar.option4')}
                <FontAwesomeIcon icon={faAngleRight} className="menu_arrow" />
              </a>
            </li>

            <li className="menu_item">
              <a href="#scroll_contact" className="menu_link">
                {t('navbar.option5')} 
                <FontAwesomeIcon icon={faAngleRight} className="menu_arrow" />
              </a>
            </li>
          </ul>

          <LanguageDropdown isScrolling={isScrolling} />
         
          <div className="menu_hamburguer">
            <img src={ menu } className="menu_img" alt="menu"/>
          </div>
        </section>

        {/* <div className="navbar-brand">
         <i className="fa fa-coffee" aria-hidden="true" data-title="Sobre me"></i>
         <i className="fa fa-folder" aria-hidden="true" data-title="Mis proyectos"></i>
        <i className="fa fa-code" aria-hidden="true" data-title="Mis habilidades"></i>
       </div>  */}
      </nav>

    </>

  );
};


