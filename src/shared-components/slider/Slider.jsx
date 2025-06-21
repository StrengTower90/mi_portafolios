import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";

const Slider = ({ slides, isOpen, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!isOpen) return null;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }

    return (
        <div className="slider-overlay">
            <button
                className="slider-close"
                onClick={onClose}
            >
                <FontAwesomeIcon icon={faClose} />
            </button>
            <button className="slider-button left" onClick={handlePrev}>
                <FontAwesomeIcon icon={faCircleArrowLeft} />
            </button>
            <div className="slider-container">

                <div className="slider-wrapper">
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map(({ src, alt, title, desc, isShowGitHub }, index) => (
                            <div className="slide" key={index}>
                                <img src={src} alt={`Slide ${index}`} />
                                {/* <div className="description">
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <button className="slider-button right" onClick={handleNext}>
                <FontAwesomeIcon icon={faCircleArrowRight} />
            </button>
        </div>
    )
};


export default Slider;