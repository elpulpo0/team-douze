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
const [gold, setGold] = useState(0)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

useEffect(() => {
    loadEvent()
}, [])

useEffect(() => {
    loadEvent()
}, [eventIndex])

useEffect(() => {
    if(feedback) {
        sleep(6000).then(() => { 
            if(Scenario.evenements.length-1 > eventIndex) {
                setEventIndex(eventIndex+1) 
            } else {
                console.log({ score: score, gold: gold })
                navigate("/emergency-bag", { state: { score: score, gold: gold } });
            }
    
         });
    }

}, [feedback])

const loadEvent = () => {
    setFeedback(null)
    setBackground(Scenario.evenements[eventIndex].image)
    setEventName(Scenario.evenements[eventIndex].text)
    setEventContext(Scenario.evenements[eventIndex].context)
    setEventActions(Scenario.evenements[eventIndex].actions)
}

const loadFeedback = (is_success) => {
    if(is_success) {
        setFeedback(Scenario.evenements[eventIndex].feedback)
        updateScore(Scenario.evenements[eventIndex].avancement.succes.value)
        updateGold(Scenario.evenements[eventIndex].avancement.succes.gold)
    } else {
        setFeedback(Scenario.evenements[eventIndex].feedback)
        updateScore(Scenario.evenements[eventIndex].avancement.echec.value)
        updateGold(Scenario.evenements[eventIndex].avancement.echec.gold)
    }
}

const updateScore = (update) => {
    setScore(score + update)
}

const updateGold = (update) => {
    setGold(gold + update)
}

const ExecuteEventAction = (action) => {
    loadFeedback(action.is_success)
}

return (
  <>
    <div className="custom_font flex flex-col items-center justify-between min-h-screen background-container">
      
      {/* Titre de la mission, centré en haut */}
      <div className="w-full max-w-3xl mb-4 flex justify-between bg-opacity-80 bg-white rounded-lg p-4 text-gray-800 shadow-md">
        <div className="flex-2 text-left">
          <h2 className="font-bold text-lg">Mission: {Scenario.nom}</h2>
          <p className="text-md">{Scenario.description}</p>
        </div>
        <div className="flex-1 text-right">
          <div className="font-semibold text-lg">Score: {score}</div>
          <div className="font-semibold text-lg">Gold: {gold}</div>
        </div>
      </div>

      {/* Conteneur principal du contenu */}
      <div
        className="relative grid grid-cols-6 grid-rows-8 w-full max-w-6xl h-[80vh] bg-cover bg-center rounded-lg shadow-lg p-4"
        style={{ backgroundImage: `url("/images/${background}")` }}
      >
        
        {/* Contexte de l'événement */}
        <div className="col-span-6 row-start-1 flex justify-center">
          <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow-md text-black w-3/4 text-center">
            {eventContext && eventContext}
          </div>
        </div>

        {/* Bulle de pensée pour l'événement */}
        <div className="col-span-3 row-start-3">
          <div className="bulle-pensee">
            <h3 className="font-bold">{eventName && eventName}</h3>
            <div className="mini-bulle mini-bulle1"></div>
            <div className="mini-bulle mini-bulle2"></div>
            <div className="mini-bulle mini-bulle3"></div>
          </div>
        </div>

        {/* Boutons d'actions, centrés en bas */}
        <div className="col-span-6 row-start-8 mt-4 flex justify-center">
          {eventActions && (
            <div className="flex flex-wrap gap-12 justify-between items-center w-full">
              {eventActions.map((action, index) => (
                <Button_game
                  label={action.label}
                  key={index}
                  className="text-white bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 w-full sm:w-auto"
                  onClick={() => ExecuteEventAction(action)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Feedback utilisateur, qui passe au-dessus des boutons */}
      {feedback && (
       <div className="feedback absolute bottom-5 left-0 right-0 mx-auto px-8 flex items-center justify-center p-4 bg-white bg-opacity-90 rounded-t-lg shadow-md z-10">
       <img src="/images/pompier_valid.png" alt="Validation" className="w-16 h-16 object-contain mr-4" />
       <p className="text-black text-xl">{feedback}</p>
     </div>
     
      )}
    </div>
  </>
);

      
      

}

export default Game;