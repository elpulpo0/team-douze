import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./start/cadre.css"

function SelectScenario() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const buttons = ["Inondation", "Séisme", "Tsunami"];
  const totalButtons = buttons.length;
  const navigate = useNavigate();

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalButtons);
  };

  const scrollLeft = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalButtons) % totalButtons
    );
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const routes = ["/inondation", "/seisme", "/tsunami"];
    navigate(routes[currentIndex]);
  };

  return (
    <div className="background-container">

      <div className='custom-cadre2'>
        <button className="custom-click2" onClick={handleButtonClick}>{buttons[currentIndex]}</button>
         </div>
      <h2 className="h2-titre"> Choix de la Sensibilisation</h2>
      <div className="triangle_left" onClick={scrollLeft}></div>


      <div className="triangle_right" onClick={scrollRight}></div>
    </div>
  );
}

export default SelectScenario;