import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Animales from "./components/Animales/Animales";
import ComponenteEncabezado from "./components/ComponenteEncabezado";
import Contact from "./components/Contact/Contact";
import Match from "./components/Match/Match";
import Adopcion from "./components/Adopcion/Adopcion";
import Formulario from "./components/Formulario/Formulario";
import SimpleAlert from "./components/SimpleAlert/SimpleAlert";

const App = () => {
  return (
    <>
      <ComponenteEncabezado />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/animales" element={<Animales />} />
        <Route path="/animales/:id" element={<Animales />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/match" element={<Match />} />
        <Route path="/adopcion" element={<Adopcion />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/simple-alert" element={<SimpleAlert />} />
      </Routes>
    </>
  );
};

export default App;
