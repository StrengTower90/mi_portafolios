import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./ProcessCard.css"

export const ProcessCard = ({ title, description, index }) => {

       useEffect(() => {
        AOS.init({
            duration: 500,
            once: true
        });
    }, []);

    return (
        <div className="process-card" data-aos="zoom-in">
            <div className="process-card-title">
                <span>{index + 1}</span>
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </div>
    );
};
