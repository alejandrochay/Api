import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const speciesUrl = queryParams.get('url');

  useEffect(() => {
    const fetchAnimals = async () => {
      if (speciesUrl) {
        try {
          const response = await fetch(speciesUrl);
          if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
          }
          const data = await response.json();
          setAnimals(data);
        } catch (error) {
          console.error('Error al obtener los animales:', error);
        }
      }
    };

    fetchAnimals();
  }, [speciesUrl]);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Lista de Animales
      </Typography>
      <Grid container spacing={2}>
        {animals.length > 0 ? (
          animals.map((animal) => (
            <Grid item xs={12} sm={6} md={4} key={animal.id}>
              <Card>
                <CardMedia
                  component="img"
                  alt={animal.nombre}
                  height="140"
                  image={animal.imagen} // Asegúrate de que este campo existe en tu respuesta
                />
                <CardContent>
                  <Typography variant="h5">{animal.nombre}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {animal.descripcion}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No se encontraron animales.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default AnimalList;