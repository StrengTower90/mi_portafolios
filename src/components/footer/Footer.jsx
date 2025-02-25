import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Footer.css";

export const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    surname: "",
    message: ""
  });

  const [emailError, setEmailError] = useState("");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!emailRegex.test(formData.email)) {
      setEmailError("please, enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    //Send email usind EmailJS
    const serviceID = 'service_bpmdrdq';
    const templateID = 'template_3p0wrli';
    const userID = 'zJzxWAtiJ03hozoU2';

    emailjs
    .sendForm(
      serviceID,
      templateID,
      e.target,
      userID
    ).then((response) => {
      console.log('Email sent successfully:', response);
      alert('Your message has been sent!');
    })
    .catch((error) => {
      console.log('Error sending email', error);
      alert('There was an issue sending your message');
    });

    //reset form after submission
    setFormData({
      email: "",
      name: "",
      surname: "",
      message: ""
    });
  }
  return (
      <footer className="footer" id="scroll_footer">
          <div className="footer-info">
            <h1>Luis Manuel Escalante Coronado</h1>
            <p>km 14, carretera Norte, 2 km hacia el sur, Managua, Nicaragua</p>
          </div>
          <div className="footer-contact">
            <h3>Contactame</h3>
            <p>Y manos a la obra</p>
          </div>
          
        <div className="Form">
        <form onSubmit={handleSubmit} >
            <input
             type='email'
             placeholder='Correo'
             name='email'
             value={formData.email}
             onChange={handleInputChange}
            />
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}

         <input
          type='text'
          placeholder='Nombre'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          />

        <input
          type='text'
          placeholder='Apellido'
          name='surname'
          value={formData.surname}
          onChange={handleInputChange}
          />

        <textarea
          type='text'
          placeholder='Mensaje'
          name='message'
          value={formData.message}
          onChange={handleInputChange}
          />

          <button type="submit">
            <span>Enviar</span>
          </button>
        </form>
      </div>
        
      
       <div className="footer-sns">
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/luis-escalante-25667133a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://www.facebook.com/share/1DZFS5uPrr/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
    
  );
};


