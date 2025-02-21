import React from "react";
import "./Info.css";

export const Info = () => {
  return (
    <div className="info-container">

      <svg className='info_blood-1' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#BAE6FF" d="M43.2,-15.8C50.5,8.5,47.2,34.4,28.5,50.7C9.9,66.9,-24.1,73.4,-46.6,58.4C-69.2,43.4,-80.2,6.9,-70.6,-20.6C-60.9,-48.1,-30.4,-66.5,-6.3,-64.5C17.9,-62.5,35.9,-40,43.2,-15.8Z" transform="translate(100 100)" />
      </svg>

      <svg className='info_blood-2' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#A7F0BA" d="M43.2,-15.8C50.5,8.5,47.2,34.4,28.5,50.7C9.9,66.9,-24.1,73.4,-46.6,58.4C-69.2,43.4,-80.2,6.9,-70.6,-20.6C-60.9,-48.1,-30.4,-66.5,-6.3,-64.5C17.9,-62.5,35.9,-40,43.2,-15.8Z" transform="translate(100 100)" />
      </svg>

      <div className="info">
        <h1>Trabajemos juntos y creemos algo unico</h1>        
      </div>
      {/* <svg className="wave_info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#f2f1ed" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,101.3C560,128,640,160,720,186.7C800,213,880,235,960,250.7C1040,267,1120,277,1200,272C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
    </div>
  );
};



