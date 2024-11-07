import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';

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

  const handleButtonClick = () => {
    const routes = ["/inondation", "/seisme", "/tsunami"];
    navigate(routes[currentIndex]);
  };

  return (
    <div className="flex justify-center background-container">

      <div className="triangle_left" onClick={scrollLeft}></div>

      <div className="button-container">
        <Button label={buttons[currentIndex]} onClick={handleButtonClick} />
      </div>

      <div className="triangle_right" onClick={scrollRight}></div>
    </div>
  );
}

export default SelectScenario;
