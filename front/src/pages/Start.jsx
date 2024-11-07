import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button_custom from '../components/Button_custom';

function start() {  
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/selectScenario');
  };

  return (
    <>
      <div className="background-container">
        <h1 className='custom_font' >Sensibilisation environnementale</h1>
        <div className="button-container button_home custom_font">
        <Button_custom label= "Commencez l'initiation" onClick={handleClick}/>
        </div>
      </div>
    </>
  )
}

export default start
