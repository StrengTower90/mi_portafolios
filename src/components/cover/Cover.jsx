import React from "react";
import "./Cover.css";
import coverImg from '../../assets/gif/search3.gif';
// import coverVideo from "../../media/coverVideo2.mp4";

export const Cover = () => {
  return (
    
    <header className="heroe_container">
    <svg className="cover_bloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
       <path fill="#3B9684" d="M47.1,-67.9C61.8,-63.9,74.9,-52,77.5,-37.9C80.1,-23.7,72.3,-7.2,67.1,7.7C61.9,22.6,59.4,36,52.1,46.2C44.9,56.5,32.9,63.7,20.2,66.3C7.5,69,-5.8,67,-17.5,62.3C-29.2,57.6,-39.3,50.2,-47.3,41C-55.4,31.7,-61.4,20.7,-63.6,8.8C-65.7,-3.1,-64.1,-15.8,-58.6,-26.4C-53.2,-36.9,-43.8,-45.3,-33.4,-51.2C-23,-57.1,-11.5,-60.4,2.4,-64.1C16.2,-67.8,32.5,-71.8,47.1,-67.9Z" transform="translate(100 100)" />
     </svg>
     <svg className="cover_bloud--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
       <path fill="#3B9684" d="M47.1,-67.9C61.8,-63.9,74.9,-52,77.5,-37.9C80.1,-23.7,72.3,-7.2,67.1,7.7C61.9,22.6,59.4,36,52.1,46.2C44.9,56.5,32.9,63.7,20.2,66.3C7.5,69,-5.8,67,-17.5,62.3C-29.2,57.6,-39.3,50.2,-47.3,41C-55.4,31.7,-61.4,20.7,-63.6,8.8C-65.7,-3.1,-64.1,-15.8,-58.6,-26.4C-53.2,-36.9,-43.8,-45.3,-33.4,-51.2C-23,-57.1,-11.5,-60.4,2.4,-64.1C16.2,-67.8,32.5,-71.8,47.1,-67.9Z" transform="translate(100 100)" />
     </svg>      
     <div className="cover-container">
        {/* <video className="video" src={coverVideo} autoPlay loop muted /> */}
        <div className="cover_title">
          <h1>Luis Manuel</h1>
          <h1> Escalante Coronado</h1>
          <p>Desarrollador FullStack</p>
          {/* <p>& | Emprendedor </p> */}
        </div>
        {/* <img src="https://media.giphy.com/media/YSqfSiVCSrF5vpXR8J/giphy.gif"/> */}
        <img src={ coverImg } className="cover_img" alt="Cover"/>
     </div>
    {/* <div className="cover_wave"> */}
      {/* <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#f2f1ed" fillOpacity="1" d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,101.3C560,128,640,160,720,186.7C800,213,880,235,960,250.7C1040,267,1120,277,1200,272C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
    {/* </div>     */}
    </header>   
        
  );
};


