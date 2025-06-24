import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";

const Slider = ({ slides, title, description, tools, isOpen, onClose, isShowCode, isOpenApp, codeUrl, publishUrl }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
            setCurrentIndex(0);
        }
    },[isOpen]);

    console.log(slides?.length)


    if (!isOpen) return null;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? prev : prev - 1));
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? slides.length - 1 : prev + 1));
    }

    return (
        <div className="slider-overlay">
            <div className="slider-all-container">
                <button
                    className="slider-close"
                    onClick={onClose}
                >
                    <FontAwesomeIcon icon={faClose} />
                </button>
                <button className="slider-button left" onClick={handlePrev} disabled={currentIndex === 0}>
                    <FontAwesomeIcon icon={faCircleArrowLeft} />
                </button>
                <div className="slider-container">
                    <div className="slider-wrapper">
                        <div
                            className="slider-track"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {slides.map((src, index) => (
                                <div className="slide" key={index}>
                                    <img src={src} alt={`Slide ${index}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="description-bar">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p>{tools}</p>
                    </div>
                </div>
                <div className="feedback-button">
                    {isShowCode && <a href={codeUrl} target="_blank" rel="noreferrer">Code</a>}
                    {isOpenApp && <a href={publishUrl} target="_blank" rel="noreferrer">Open</a>}
                </div>

                <div className="bottom-status">
                    <p>{`${currentIndex + 1} / ${slides?.length}`}</p>
                </div>

                <button className="slider-button right" onClick={handleNext} disabled={currentIndex === slides.length - 1}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                </button>
            </div>
        </div>
    )
};


export default Slider;

