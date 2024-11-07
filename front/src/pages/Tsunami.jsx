import { useState } from 'react';
import '../App.css';
import './start/cadre.css';
import video from '../assets/videos/tsunami.mp4';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Tsunami() {

  const navigate = useNavigate() 

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/selectScenario');
  };

  return (
    <>
      <div className="background-container">
        <video className='video' src={video} controls autoPlay loop>
          Your browser does not support the video tag.
        </video>
        <Button  variant="outline-dark" className='custom-click3'> Commencez le scénario </Button>
        <Button  variant="danger" className='custom-click4' onClick={handleClick}> Retour à la selection </Button>
        
      </div>
    </>
  );
}

export default Tsunami;