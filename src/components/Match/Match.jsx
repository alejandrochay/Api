import { useEffect, useState } from "react";
import { Card, CardContent, Button } from "@mui/material";
import { Heart, X } from "lucide-react";
import "./Match.css";

export default function Match() {
  const [animales, setAnimales] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((response) => response.json())
      .then((data) => {
        setAnimales(data.message);
      });
  }, []);

  const nextAnimal = () => {
    setIndex((prev) => (prev + 1) % animales.length);
  };

  const handleLike = () => {
    const animalCard = document.querySelector('.image-container');
    animalCard.classList.add('like');
    setTimeout(() => animalCard.classList.remove('like'), 500);
    nextAnimal();
  };

  const handleDislike = () => {
    const animalCard = document.querySelector('.image-container');
    animalCard.classList.add('dislike');
    setTimeout(() => animalCard.classList.remove('dislike'), 500);
    nextAnimal();
  };

  if (animales.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="tinder-container">
      <h2 className="title">Haz match</h2>
      <Card className="animal-card">
        <CardContent className="image-container">
          <img 
            src={animales[index] || "https://images.dog.ceo/breeds/pyrenees/n02111500_3710.jpg"} 
            alt={`Perro ${index + 1}`} 
            className="animal-image" 
          />
        </CardContent>
      </Card>
      <div className="buttons-container">
        <Button variant="outlined" className="dislike-button" onClick={handleDislike}>
          <X size={36} />
        </Button>
        <Button variant="contained" className="like-button" onClick={handleLike}>
          <Heart size={36} />
        </Button>
      </div>
    </div>
  );
}