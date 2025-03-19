import React, { useState } from 'react';
import './Contact.css';
import SimpleAlert from '../SimpleAlert/SimpleAlert';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
    console.log('Formulario enviado', { name, email, message });
    setShowConfirmation(true);
    
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  };

  return (
    <div className="contact-container">
      <h1>Déjanos tus comentarios</h1>
      <p>¡Nos encantaría conocer tu opinión! Queremos mejorar constantemente nuestra plataforma para darte la mejor experiencia posible. Por eso te pedimos que nos dejes tus comentarios, sugerencias o cualquier otro tipo de feedback que quieras compartir con nosotros.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Cuéntanos tu nombre"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Escribe tu correo"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Escríbenos lo que quieras</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Cuéntanos aquí"
            required
          />
        </div>
        <button type="submit" className="submit-button">Enviar mensaje a Huachitos</button>
      </form>
      {showConfirmation && (
        <div className="confirmation-alert">
          <SimpleAlert />
        </div>
      )}
    </div>
  );
};

export default Contact;
