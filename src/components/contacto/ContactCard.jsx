import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './ContactCard.css';

export const ContactCard = ({ title, icon, content }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const string = 'hola ; Hello';


        if (content.includes(';')) {
            setItems(
                content.split(';')
            );
        } else {
            setItems(
                [content]
            );
        }
    }, [content]);

    const getIcon = (keyName) => {
        const icons = {
            location: faLocationDot,
            envelope: faEnvelope,
            phone: faPhone
        };

        return icons[keyName];
    }

    useEffect(() => {
        console.log(items);
        console.log(icon)
    }, [items]);

    return (
        <div className="contact_card">
            <div className="icon_area">
                <div className="icon_circule">
                    <FontAwesomeIcon icon={getIcon(icon)} className="icon" />
                </div>
            </div>
            <div className="content">
                <h3>{title}</h3>
                <div className="span_area">
                    {items.map((item, index) => (
                        <>
                            <span key={index}>{item}</span> &nbsp;
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
};