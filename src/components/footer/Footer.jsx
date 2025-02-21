import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
      <footer className="footer" id="scroll_footer">

          <div className="footer-info">
            <h1>Luis Manuel Escalante Coronado</h1>
            <p>km 14, carr Norte, 2 km hacia el sur, Managua-Nicaragua</p>
          </div>
          <div className="footer-contact">
            <h3>Contactame</h3>
            <p>Y manos a la obra</p>
          </div>
          
        <div className="Form">
        <form onSubmit='' >
          <input
          type='email'
          placeholder='Correo'
          name='email'
          value=''
          />

         <input
          type='text'
          placeholder='Nombre'
          name='name'
          value=''
          />

        <input
          type='text'
          placeholder='Apellido'
          name='surname'
          value=''
          />

        <textarea
          type='text'
          placeholder='Mensaje'
          name='message'
          value=''
          />

          <button
          >
            <span>Enviar</span>
          </button>
        </form>
      </div>
        
      
       <div className="footer-sns">
        <div className="design-by">&copy;Luis Escalante</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/luis-manuel-escalante-004755228" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://www.facebook.com/luismanuel.escalantecoronado.7" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
    
  );
};


