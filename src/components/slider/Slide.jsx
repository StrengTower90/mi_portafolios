import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMagnifyingGlass, faEye } from "@fortawesome/free-solid-svg-icons";
import "./Slide.css"

const Slide = ({ title, desc, src, alt, url }) => {
    return (
        <div className="card-area">
            <div className="project-card">
                <img src={src} alt={alt} />
                <div className="card-overlay">
                </div>
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-style" />
                </button>
            </div>
            <h3>{title.toUpperCase()}</h3>
        </div>
    )
};

export default Slide;
