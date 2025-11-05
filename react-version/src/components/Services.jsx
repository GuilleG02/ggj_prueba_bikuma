import React from 'react';
import serviciosImage from '../assets/Servicios.png';

export default function Services() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title">Servicios</h2>
        <div className="services-image-wrapper">
          <img src={serviciosImage} alt="Servicios de accesibilidad universal" className="services-image" loading="lazy" />
          <div className="services-content">
            <h3 className="services-title">
              <span className="services-title-small">Somos consultores en</span>
              <span className="services-title-large">Accesibilidad Universal</span>
            </h3>
            <p className="services-text">
              Nuestro objetivo es que todas las personas puedan desenvolverse en cualquier entorno con independencia y accedan a todos los recursos del mismo con facilidad.
            </p>
            <p className="services-text">
              Mira cómo podemos ayudarte a transformar tu proyecto, cumplir con las normativas y abrirlo a todas las personas.
            </p>
            <a href="#contact" className="btn-primary services-btn">Contacta con nosotros →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

