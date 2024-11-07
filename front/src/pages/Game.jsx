import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css'
import Scenario from "../scenarios/innondation.data"
import Button_game from '../components/buttons/Button_game';

function Game() {
    const navigate = useNavigate();

    const [eventIndex, setEventIndex] = useState(0)
    const [eventName, setEventName] = useState(null)
    const [eventContext, setEventContext] = useState(null)
    const [eventActions, setEventActions] = useState(null)
    const [feedback, setFeedback] = useState(null)
    const [background, setBackground] = useState(null)
    const [score, setScore] = useState(0)

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        loadEvent()
    }, [])

    useEffect(() => {

        loadEvent()
    }, [eventIndex])

    const loadEvent = () => {
        setFeedback(null)
        setBackground(Scenario.evenements[eventIndex].image)
        setEventName(Scenario.evenements[eventIndex].text)
        setEventContext(Scenario.evenements[eventIndex].context)
        setEventActions(Scenario.evenements[eventIndex].actions)
    }

    const loadFeedback = (is_success) => {
        if (is_success) {
            setFeedback(Scenario.evenements[eventIndex].feedback)
            updateScore(Scenario.evenements[eventIndex].avancement.succes.value)
        } else {
            setFeedback(Scenario.evenements[eventIndex].feedback)
            updateScore(Scenario.evenements[eventIndex].avancement.echec.value)
        }
    }

    const updateScore = (update) => {
        setScore(score + update)
    }

    const ExecuteEventAction = (action) => {
        loadFeedback(action.is_success)
        sleep(3000).then(() => {
            if (Scenario.evenements.length - 1 > eventIndex) {
                setEventIndex(eventIndex + 1)
            } else {
                navigate("/emergency-bag", { state: { score: score } });
            }

        });


    }


    return (
      <>
        {/* Conteneur principal avec le titre en haut et le contenu centré */}
        <div className="custom_font flex flex-col items-center justify-between min-h-screen background-container">
          
          {/* Titre de la mission, centré en haut */}
          <div className="w-full max-w-3xl mb-4 flex flex-col items-center bg-opacity-80 bg-white rounded-lg p-4 text-gray-800 shadow-md">
            <h2 className="font-bold text-lg text-center">Mission: {Scenario.nom}</h2>
            <p className="text-sm text-center">{Scenario.description}</p>
            <div className="font-semibold mt-2 text-center">Score: {score}</div>
          </div>
    
          {/* Conteneur principal du contenu, centré au milieu, avec une hauteur ajustée */}
          <div
            className="relative grid grid-cols-6 grid-rows-8 gap- w-full max-w-6xl h-[80vh] bg-cover bg-center rounded-lg shadow-lg p-4"
            style={{ backgroundImage: `url("/images/${background}")` }}
          >
            
            {/* Contexte de l'événement, centré */}
            <div className="col-span-6 row-start-1 flex justify-center">
              <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow-md text-black w-3/4 text-center">
                {eventContext && eventContext}
              </div>
            </div>
    
            {/* Nom de l'événement */}
            <div className="col-span-3 row-start-3">
              <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md text-black">
                <h3 className="font-bold">{eventName && eventName}</h3>
              </div>
            </div>
    
            {/* Boutons d'actions, centrés en bas */}
            <div className="col-span-6 row-start-8 mt-4 flex justify-center">
              {eventActions && (
                <div className="flex gap-4 flex-wrap justify-center items-center">
                  {eventActions.map((action, index) => (
                    <Button_game
                      label={action.label}
                      key={index}
                      className="text-white bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2"
                      onClick={() => ExecuteEventAction(action)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
    
          {/* Feedback utilisateur, positionné en bas à gauche */}
          {feedback && (
            <div className="absolute left-4 bottom-4 flex items-center space-x-2 p-4 bg-white bg-opacity-80 rounded-lg shadow-md">
              <img src="/images/pompier_valid.png" alt="Validation" className="w-16 h-16 object-contain" />
              <p className="text-black">{feedback}</p>
            </div>
          )}
        </div>
      </>
    );
    
    
      
      

}

export default Game;