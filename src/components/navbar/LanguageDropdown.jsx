import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLanguage} from "@fortawesome/free-solid-svg-icons";
import './LanguageDropdown.css';

const LanguageDropdown = ({ isScrolling }) => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false); 
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Español' },
    ];

    const toggleDropdown = () => setOpen(prev => !prev);

    const handleChangeLanguage = (code) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    useEffect(() => {
        console.log(i18n.language);
        const handleClickOutSide = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutSide);
        return () => document.removeEventListener('click', handleClickOutSide);
    }, []);

    return (
        <div className={`language-dropdown ${open ? 'open' : ''}`} ref={dropdownRef}>
            <button className={`dropdown-toggle ${isScrolling > 20 ? 'on-scroll' : 'off-scroll' }`} onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faLanguage} className="language"/> <span>|</span>
                {i18n.language.toUpperCase()} 
            </button>
            <ul className="dropdown-menu">
                {languages.map(({ code, label }) => (
                  <li key={code}>
                    <button className={`${i18n.language === code ? 'selected-lang' : ''}`} onClick={() => handleChangeLanguage(code)}>
                        {label}
                    </button>
                  </li>
                ))} 
            </ul>
        </div>
    );
};

export default LanguageDropdown;