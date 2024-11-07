import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button_custom from '../components/buttons/Button_custom';

function start() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/selectScenario');
  };

  const ecoles = ['Ecole 1', 'Ecole 2', 'Ecole 3', 'Ecole 4'];
  const classesOptions = {
    'Ecole 1': ['Classe 1A', 'Classe 1B', 'Classe 1C', 'Classe 1D'],
    'Ecole 2': ['Classe 2A', 'Classe 2B', 'Classe 2C', 'Classe 2D'],
    'Ecole 3': ['Classe 3A', 'Classe 3B', 'Classe 3C', 'Classe 3D'],
    'Ecole 4': ['Classe 4A', 'Classe 4B', 'Classe 4C', 'Classe 4D'],
  };

  const [selectedEcole, setSelectedEcole] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const classesForSelectedEcole = classesOptions[selectedEcole] || [];

  return (
    <>
      <div className="background-container">
        <h1 className='custom_font' >Sensibilisation environnementale</h1>
        <div className='menu-container'>
          <div className="menu">
            <select
              id="ecoleSelect"
              value={selectedEcole}
              onChange={(e) => {
                setSelectedEcole(e.target.value);
                setSelectedClass('');
              }}
              className="dropdown"
            >
              <option value="">--Choisis une Ecole--</option>
              {ecoles.map((ecole) => (
                <option key={ecole} value={ecole}>
                  {ecole}
                </option>
              ))}
            </select>
          </div>
          <div className="menu">
            <select
              id="classSelect"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              disabled={!selectedEcole}
              className="dropdown"
            >
              <option value="">--Choisis une Classe--</option>
              {classesForSelectedEcole.map((classOption) => (
                <option key={classOption} value={classOption}>
                  {classOption}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="button-container button_home custom_font">
          <Button_custom label="Commencez l'initiation" onClick={handleClick} />
        </div>
      </div>
    </>
  )
}

export default start
