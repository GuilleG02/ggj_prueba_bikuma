import React from 'react';
import logo from '../assets/LogoFooter.png';
import footer1 from '../assets/Footer1.png';

export default function Footer() {
  return (
    <footer className="footer" id="contact" role="contentinfo">
      <div className="container">
        <div className="footer-main">
          {/* Columna izquierda: Logo, texto, botón, certificaciones */}
          <div className="footer-col footer-brand">
            <img src={logo} alt="Puntodis Accessible Solutions" className="footer-logo" />
            <p className="footer-description">
              Actualiza con nosotros tu proyecto con accesibilidad en la información y lleva tu mensaje a todas las personas
            </p>
            <a href="#contact" className="btn-primary footer-contact">Contactar →</a>
            <div className="footer-certifications">
              <img src={footer1} alt="Certificaciones AENOR" />
            </div>
          </div>

          {/* Columna central: Enlaces de navegación */}
          <div className="footer-col footer-nav">
            <nav aria-label="Footer navigation">
              <a href="#products">Productos</a>
              <a href="#services">Servicios</a>
              <a href="#administracion">Administración pública</a>
              <a href="#conocenos">Conócenos</a>
              <a href="#actualidad">Actualidad</a>
              <a href="#tienda">Tienda</a>
            </nav>
          </div>

          {/* Columna derecha: Newsletter */}
          <div className="footer-col footer-newsletter">
            <h3>¿Quieres estar al día con las noticias de accesibilidad?</h3>
            <p className="newsletter-subtitle">Suscríbete a la newsletter</p>
            <form className="newsletter-form" aria-label="Suscripción newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Email" required />
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>Acepto la política de privacidad</span>
              </label>
              <button className="btn-newsletter" type="submit">Suscribirse</button>
            </form>
          </div>
        </div>

        {/* Fila inferior: Copyright, legal, redes sociales */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© 2024 Puntodis</span>
            <a href="#privacy">Políticas de privacidad</a>
            <a href="#legal">Aviso legal</a>
            <a href="#cookies">Política de cookies</a>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="X (Twitter)">X</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="YouTube">YT</a>
            <a href="#" aria-label="Facebook">FB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
