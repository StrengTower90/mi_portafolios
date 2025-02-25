import React, { useEffect } from "react";
import "./Navbar.css";
import { ScrollThem } from "./ScrollThem";
import arrow from '../../assets/arrow.svg'
import menu from '../../assets/menu.svg'
import SetShowMenu from "../../helpers/JavaApp";



export const Navbar = ({ isScrolling }) => {

   const { toTheTop } =  ScrollThem();
   
    useEffect(() => {
     SetShowMenu();
    }, [])
    
  return (
    <> 
     <nav className={`menu ${isScrolling > 20 ? "scrolling" : null}`}>
      <section className="menu_container">
        <div className="menu_logo" onClick={toTheTop}>
          <h1 className="fa fa-arrow-circle-up"> </h1>
        </div>
        
        <ul className="menu_links">
          <li className="menu_item">
             <a href="#scroll_about" className="menu_link">Sobre Mí<img src={ arrow } className="menu_arrow" alt="arrow"/></a>
          </li>
          <li className="menu_item menu_item--show">
              <a href="#scroll_skills" className="menu_link">Habilidades <img src={ arrow } className="menu_arrow" alt="arrow"/></a>
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
              <a href="#scroll_projects" className="menu_link">Proyectos <img src={ arrow } className="menu_arrow" alt="arrow"/></a>
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

            <li className="menu_item">
             <a href="#scroll_footer" className="menu_link">Contacto <img src={ arrow } className="menu_arrow" alt="arrow"/></a>
          </li>
        </ul>
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


