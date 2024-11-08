import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button_custom from '../components/buttons/Button_custom';
import Button_back from '../components/buttons/Button_back';


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

  const backHome = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleButtonClick = () => {
    const routes = ["/inondation", "/seisme", "/tsunami"];
    navigate(routes[currentIndex]);
  };

  return (
    <div className="flex justify-center background-container">

<h1 className="titre_selection">
  Choisissez le thème du scénario
</h1>


      <div className="triangle_left" onClick={scrollLeft}></div>

      <div className="button-container">
        <Button_custom label={buttons[currentIndex]} onClick={handleButtonClick} />
      </div>

      <div className="button-container_back">
      <Button_back label= "Retour" onClick={backHome}/>
      </div>
      
      <div className="triangle_right" onClick={scrollRight}></div>
    </div>
  );
}

export default SelectScenario;