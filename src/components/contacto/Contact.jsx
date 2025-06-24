import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ContactCard } from './ContactCard.jsx';
import { ContactForm } from "./ContactForm.jsx";
import Modal from "../../shared-components/modal/Modal.jsx";
import './Contact.css';

export const Contact = () => {
    const { t, i18n: { language } } = useTranslation();
    const [items, setItems] = useState(t('contact.items', { returnObjects: true }));
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setItems(t('contact.items', { returnObjects: true }));
    }, [language, t]);


    return (
        <div className="contact_container" id="scroll_contact">
            <div className="contact_title">
                <h1>{t('contact.title')}</h1>
            </div>

            <div className="contact_content">
                {Object.values(items).map(({ title, icon, content }, index) => (
                    <ContactCard
                        key={index}
                        title={title}
                        icon={icon}
                        content={content}
                    />
                ))}
            </div>

            <button
                className="send-message"
                onClick={() => setIsModalOpen(true)}
            >
                {t('contact.button')}
            </button>

            <div className="social-media">
                <a href="https://www.linkedin.com/in/luis-escalante-25667133a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin linkedin"></i>
                </a>
                <a href="https://www.facebook.com/share/1DZFS5uPrr/" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook facebook"></i>
                </a>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ContactForm />
            </Modal>
        </div>
    )
}