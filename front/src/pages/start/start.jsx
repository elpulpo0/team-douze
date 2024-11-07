import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './cadre.css'

function start() {  
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/selectScenario');
  };

  return (
    <>
      <div  className="background-container">
        <div className='custom-cadre'>
        <h1 className='h1-titre'>Sensibilisation environnementale</h1>
        <Button  variant="outline-dark" className='custom-click' onClick={handleClick}> Commencez l'initiation </Button>
        </div>
      </div>
    </>
  )
}

export default start
