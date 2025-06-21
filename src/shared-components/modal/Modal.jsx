import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => document.body.style.overflow = "";
    }, [isOpen]);
        

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button 
                    className="modal-close" 
                    onClick={onClose}
                >
                    <FontAwesomeIcon icon={faClose} />
                </button>
                {children}
            </div>
        </div>
    )
};

export default Modal;