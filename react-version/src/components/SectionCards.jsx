import React from 'react';

function Card({ title, subtitle, imgAlt }) {
  return (
    <article className="card" tabIndex="0">
      <div className="card-media" role="img" aria-label={imgAlt} />
      <div className="card-content">
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </article>
  );
}

const DATA = {
  news: [
    { title: '¿Tienes cita en Fitur?', subtitle: 'La accesibilidad estará en tu agenda', imgAlt: 'Feria de turismo' },
    { title: 'Piensa en más accesibilidad', subtitle: 'Personas con Asperger', imgAlt: 'Piezas puzzle' },
    { title: 'Novedades de Puntodis', subtitle: '20 años', imgAlt: 'Equipo Puntodis' }
  ],
  quick: [
    { title: 'Tienda online', subtitle: 'Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida' },
    { title: 'Administración pública', subtitle: 'Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida' },
    { title: 'Fabricamos a medida', subtitle: 'Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida' },
    { title: 'Digitalización accesible', subtitle: 'Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida' }
  ],
  services: [
    { title: 'Accesibilidad en comunicación' },
    { title: 'Servicios de digitalización' },
    { title: 'Diagnósticos y planes' },
    { title: 'Evacuación y emergencia' }
  ],
  products: [
    { title: 'Señalización y fabricación' },
    { title: 'Planos y cuadros táctiles' },
    { title: 'Papelería y etiquetas' },
    { title: 'Pavimento táctil' }
  ],
  projects: [
    { title: 'Bilbobus', subtitle: 'Estrategia integral' },
    { title: 'Alhóndiga Bilbao', subtitle: 'Accesibilidad para todos' },
    { title: 'Vila Museu', subtitle: 'Museos para todos' }
  ]
};

export default function SectionCards({ id, title, kind }) {
  const items = DATA[kind] || [];
  return (
    <section className="section" id={id} aria-labelledby={title ? `${id}-title` : undefined}>
      <div className="container">
        {title && <h2 id={`${id}-title`}>{title}</h2>}
        <div className="grid">
          {items.map((item, idx) => (
            <Card key={idx} title={item.title} subtitle={item.subtitle} imgAlt={item.imgAlt || item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}


