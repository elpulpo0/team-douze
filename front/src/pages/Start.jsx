import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

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
        <Button label= "Commencez l'initiation" className='custom-click' onClick={handleClick}></Button>
        </div>
      </div>
    </>
  )
}

export default start
