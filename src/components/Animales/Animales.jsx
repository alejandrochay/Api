import React, { useEffect, useState } from 'react';
import './Animales.css';

const Animales = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch('https://huachitos.cl/api/animales')
      .then(response => response.json())
      .then(data => setAnimals(data.data)) // Asegúrate de acceder correctamente a los datos
      .catch(error => console.error('Error fetching animals:', error));
  }, []);

  return (
    <div className="animales-container">
      <h1>Animales</h1>
      <h2>Animales Disponibles</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {animals.length > 0 ? (
          animals.map(animal => (
            <div key={animal.id} className="animal-card">
              <img src={animal.imagen} alt={animal.nombre} />
              <h3>{animal.nombre}</h3>
              <p><strong>Tipo:</strong> {animal.tipo}</p>
              <p><strong>Edad:</strong> {animal.edad}</p>
              <p><strong>Estado:</strong> {animal.estado}</p>
              <p><strong>Género:</strong> {animal.genero}</p>
              <div className="animal-details">
                <h4>Descripción Física</h4>
                <p dangerouslySetInnerHTML={{ __html: animal.desc_fisica }}></p>
                <h4>Personalidad</h4>
                <p dangerouslySetInnerHTML={{ __html: animal.desc_personalidad }}></p>
                <h4>Detalles Adicionales</h4>
                <p dangerouslySetInnerHTML={{ __html: animal.desc_adicional }}></p>
                <p><strong>Esterilizado:</strong> {animal.esterilizado ? 'Sí' : 'No'}</p>
                <p><strong>Vacunas:</strong> {animal.vacunas > 0 ? 'Sí' : 'No'}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay animales disponibles</p>
        )}
      </div>
    </div>
  );
};

export default Animales;
