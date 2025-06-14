import React from "react";
import "./Skills.css";

const SvgIcon = ({ src, title, level }) => {
    return (
        <div className="skill___item">
            {src ? (
                <img src={src} alt={title} />
            ) : (
                <h4>No SVG Available</h4>
            )}
            <span>{title}</span>
            <div className="progress__bar">
                <div className="progress__fill" style={{ width: `${level}%`}}>
                    <span>{level}%</span>
                </div>
            </div>
        </div>
    )
};

export default  SvgIcon;