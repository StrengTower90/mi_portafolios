import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ContactCard } from './ContactCard.jsx';
import { ContactForm } from "./ContactForm.jsx";
import Modal from "../../shared-components/modal/Modal.jsx";
import './Contact.css';

export const Contact = () => {
    const { t, i18n: { language } } = useTranslation();
    const [items, setItems] = useState(t('contact.items', { returnObjects: true }));
    const [isModalOpen, setIsModalOpen] = useState(true);

    useEffect(() => {
        setItems(t('contact.items', { returnObjects: true }));
    }, [language]);

    useEffect(() => {
        console.log(Object.values(items));
    }, [])

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
                Send Message
            </button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ContactForm />
            </Modal>
        </div>
    )
}