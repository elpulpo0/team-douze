import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button_custom from '../components/buttons/Button_custom';

function start() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/selectScenario');
  };

  const ecoles = ['Ecole Marie Curie', 'Ecole Jules Ferry', 'Ecole Jean Moulin', 'Ecole Victor Hugo'];
  const classesOptions = {
    'Ecole Marie Curie': ['CP A1', 'CE2 B1', 'CM1 C1', 'CM2 D1'],
    'Ecole Jules Ferry': ['CP A2', 'CE2 B2', 'CM1 C2', 'CM2 D2'],
    'Ecole Jean Moulin': ['CP A3', 'CE2 B3', 'CM1 C3', 'CM2 D3'],
    'Ecole Victor Hugo': ['CP A4', 'CE2 B4', 'CM1 C4', 'CM2 D4'],
  };

  const [selectedEcole, setSelectedEcole] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const classesForSelectedEcole = classesOptions[selectedEcole] || [];

  return (
    <>
      <div className="custom_font flex flex-col items-center justify-between min-h-screen background-container">
        <div className="flex items-center titre">

          {/* Titre à côté du logo */}
          <h1>
            MISSION SAUVETAGE
          </h1>
          {/* Logo à gauche */}
          <img src="/images/Logo.png" alt="Logo" className="w-40 h-40 mr-2" />
        </div>
        <span className='custom_font text-5xl main-sub-title' style={{ marginBottom: '3rem' }}>Sensibilisation aux risques majeurs</span>
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
