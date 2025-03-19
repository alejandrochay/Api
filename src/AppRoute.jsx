import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComponenteEncabezado from './components/ComponenteEncabezado';
import Home from './components/Home/Home';
import Animales from './components/Animales/Animales';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Match from './components/Match/Match';
import Adopcion from './components/Adopcion/Adopcion';
import Formulario from './components/Formulario/Formulario';

import SimpleAlert from './components/SimpleAlert/SimpleAlert';

function AppRoute() {
  return (
    <Router>
      <ComponenteEncabezado />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animales" element={<Animales />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/match" element={<Match />} />
        <Route path="/adopcion" element={<Adopcion />} />
        <Route path="/formulario" element={<Formulario />} />
       
        {/* Ruta de error 404 */}
        <Route path="*" element={<h1 style={{ textAlign: 'center' }}>Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRoute;
