import React, { useState } from "react";
import "./Home.css";
import SimpleAlert from "../SimpleAlert/SimpleAlert";

const Home = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('13:00-13:15');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = () => {
    setShowConfirmation(true);
    
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  };

  return ( 
    <div className="background"> 
      <div className="container"> 
        <h1 className="title1">Veterinary Clinic, formación continuada gratuita para veterinarios y ATV</h1> 
        <h2 className="subtitle1">El mayor portal de formación continuada veterinaria de animales de compañía en español</h2> 
        <h3 className="welcome">Bienvenido ...</h3> 
        <div className="content"> 
          <h2>Consulta Veterinaria en línea</h2> 
          <p>Videoconsulta: hasta 15 minutos</p> 
          <p>Entrega estimada entre 17. Marzo y 20. Marzo.</p> 
          
          <div className="date-selection"> 
            <label htmlFor="date">Selecciona el día de tu cita:</label> 
            <input 
              type="date" 
              id="date" 
              name="date" 
              className="date-input"
              value={selectedDate}
              onChange={handleDateChange}
              min={new Date().toISOString().split('T')[0]}
            /> 
          </div> 
          <div className="time-selection"> 
            <label htmlFor="time">Selecciona el horario de tu cita:</label> 
            <select 
              id="time" 
              name="time" 
              className="time-select"
              value={selectedTime}
              onChange={handleTimeChange}
            > 
              <option value="13:00-13:15">13:00 - 13:15</option> 
              <option value="13:15-13:30">13:15 - 13:30</option> 
              <option value="13:30-13:45">13:30 - 13:45</option> 
            </select> 
          </div>
          
          <div className="button-container">
            <button 
              className="register-button" 
              onClick={handleSubmit}
            >
              Registrar Cita
            </button>
          </div>
          
          {showConfirmation && (
            <div className="confirmation-alert">
              <SimpleAlert />
            </div>
          )}
        </div> 
      </div> 
    </div> 
  ); 
};
 
export default Home;