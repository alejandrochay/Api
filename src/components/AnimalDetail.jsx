import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AnimalDetail = () => {
  const { id } = useParams(); // Obtener el ID de la URL
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    fetch(`https://huachitos.cl/api/animal/${id}`)
      .then(response => response.json())
      .then(data => setAnimal(data))
      .catch(error => console.error('Error fetching animal details:', error));
  }, [id]);

  if (!animal) {
    return <p>Cargando...</p>; // Mostrar cargando mientras se obtienen los datos
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Detalles de {animal.nombre}</h1>
      <img 
        src={animal.imagen} 
        alt={animal.nombre} 
        style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} 
      />
      <p><strong>Descripción física:</strong> {animal.desc_fisica.replace(/<[^>]*>/g, '')}</p>
      <p><strong>Personalidad:</strong> {animal.desc_personalidad.replace(/<[^>]*>/g, '')}</p>
      <p><strong>Información adicional:</strong> {animal.desc_adicional.replace(/<[^>]*>/g, '')}</p>
      <button 
        onClick={() => window.history.back()} 
        style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#000', color: '#fff', border: 'none' }}
      >
        Volver
      </button>
    </div>
  );
};

export default AnimalDetail;
