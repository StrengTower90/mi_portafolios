import React from "react";
import "./Skills.css";

const SvgIcon = ({ src, title, level, review }) => {
    return (
        <div className="skill___item">
          <div className="skill__img">
              {src ? (
                <img src={src} alt={title} />
            ) : (
                <h4>No SVG Available</h4>
            )}
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