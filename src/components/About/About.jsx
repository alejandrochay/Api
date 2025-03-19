import { useEffect, useState } from "react";
import { Card, CardContent } from "@mui/material";

import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="donation-banner">
        
      </div>

      <div className="info-section">
        <h2 className="title1">Transformando la realidad de los animales</h2>
        <p className="subtitle">Descubre todo lo que puedes hacer en Huachitos y únete a nuestra comunidad!</p>
        <div className="info-boxes">
          <div className="info-box">
            <h3 className="info-title">Encuentra</h3>
            <p className="info-description">Escoge al compañero ideal, revisa todos los animales que están disponibles para adopción.</p>
          </div>
          <div className="info-box">
            <h3 className="info-title">Selecciona</h3>
            <p className="info-description">Recibe las postulaciones de l@s potenciales adoptantes y toma una decisión informada gracias al formulario de postulación.</p>
          </div>
          <div className="info-box">
            <h3 className="info-title">Colabora</h3>
            <p className="info-description">Crea un equipo colaborativo e invita a otras personas a añadir animales juntos.</p>
          </div>
          <div className="info-box">
            <h3 className="info-title">Aprende</h3>
            <p className="info-description">Explora nuestro contenido informativo y aprende sobre adopción responsable y bienestar animal.</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2 className="title">Sobre Huachitos</h2>
        <p className="subtitle">Plataforma colaborativa de adopción animal</p>
        <p>¡Hola! Somos Rafael y Karla, el equipo detrás de Huachitos.</p>
        <p>Nos apasionan tanto el mundo de la tecnología como el de los animales. Trabajamos como desarrollador web (Rafael) y analista de control de calidad en desarrollos web (Karla) y combinamos nuestras habilidades para crear Huachitos.</p>
        <p>Esta iniciativa nace de nuestra preocupación por la cantidad de animales abandonados que vemos todos los días y de nuestra comprensión de los retos a los que se enfrentan las personas, fundaciones y agrupaciones que rescatan animales. Estos retos incluyen la falta de visibilidad de los animales que tienen en adopción y la reincidencia en el abandono. Nuestra principal motivación es utilizar esta plataforma para conectar a tantos animales necesitados con hogares que los amen y cuiden.</p>
        <p>En Huachitos ofrecemos a fundaciones, organizaciones y rescatistas independientes la oportunidad de promocionar de forma gratuita a los animales que están bajo su cuidado esperando un hogar. Nuestro objetivo principal es facilitar la búsqueda de hogares para los animales rescatados y fomentar la tenencia y adopción responsables. Además, difundimos también los animales perdidos para ayudar en la reunificación con sus familias.</p>
        <p>Es importante que sepas que todos los animales listados en Huachitos son responsabilidad de las organizaciones, agrupaciones y rescatistas individuales que los publican. Te recomendamos ponerte en contacto con ellos para confirmar la disponibilidad del animal y obtener información adicional.</p>
        <p>¡Únete y juntos hagamos del mundo un lugar mejor para los animales! Tu apoyo es fundamental para lograr un impacto positivo en la vida de los animales de nuestro país y reducir juntos el abandono. ❤️</p>
      </div>
    </div>
  );
}