import { useEffect, useState } from "react";
import { Card, CardContent, Button } from "@mui/material";
import "./Adopcion.css";

export default function Adopcion() {
  const [animales, setAnimales] = useState([]);
  const [adoptado, setAdoptado] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data.message)) {
          setAnimales(data.message);
        } else {
          throw new Error("Data is not an array");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const handleAdoptar = () => {
    setAdoptado(true);
  };

  const renderAnimales = () => {
    return animales.map((imagen, index) => (
      <Card key={index} className="animal-card">
        <CardContent className="image-container">
          <img src={imagen} alt={`Perro ${index + 1}`} className="animal-image" />
        </CardContent>
        <Button variant="contained" className="adopt-button" onClick={handleAdoptar}>
          Adoptar
        </Button>
      </Card>
    ));
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (animales.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="adopcion-container">
      <h2 className="title">Adopción</h2>
      {adoptado && <p className="adopt-message">¡Has adoptado un animal! <a href="/formulario">Rellenar formulario</a></p>}
      <div className="animal-list">{renderAnimales()}</div>
    </div>
  );
}
