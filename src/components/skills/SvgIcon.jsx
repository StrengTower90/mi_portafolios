import React from "react";
import "./Skills.css";

const SvgIcon = ({ src, Svg, title, level, review }) => {
    return (
        <div className="skill___item">
          <div className="skill__img">
              {src && <img src={src} alt={title} />}
              {Svg && <Svg class="skill__svg" />}
          </div>
          <div className="skill__review">
            <span>{title}</span>
            <p>{review}</p>

          </div>
            {/* <div className="progress__bar">
                <div className="progress__fill" style={{ width: `${level}%`}}>
                    <span>{level}%</span>
                </div>
            </div> */}
        </div>
    )
};

export default  SvgIcon;