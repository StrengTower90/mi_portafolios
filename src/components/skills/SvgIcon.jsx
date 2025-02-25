import React from "react";
import "./Skills.css";

const SvgIcon = ({ src, title }) => {
    return (
        <div className="skill___item">
            {src ? (
                <img src={src} alt={title} />
            ) : (
                <h4>No SVG Available</h4>
            )}
            <span>{title}</span>
        </div>
    )
};

export default  SvgIcon;