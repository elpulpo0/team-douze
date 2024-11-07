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
        sleep(3000).then(() => { 
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
          <div className="flex items-center justify-center min-h-screen background-container">
            <div className="py-8">
      

      
              {/* Main Content Container with larger width and height */}
              <div
                className="relative grid grid-cols-6 grid-rows-8 gap-4 w-full max-w-6xl h-[90vh] bg-cover bg-center rounded-lg shadow-lg px-8"
                style={{ backgroundImage: `url("/images/${background}")` }}
              >


                {/* Contexte de l'événement */}
                <div className="col-span-6 row-start-2 flex flex-col justify-center">
                {/* En-tête avec Mission et Score - Make sure it's above and centered */}
                <div className="w-full mb-8 flex flex-col items-center bg-opacity-80 bg-white rounded-lg p-4 text-gray-800 shadow-md">
                    <h2 className="font-bold text-lg text-center">Mission: {Scenario.nom}</h2>
                    <p className="text-sm text-center">{Scenario.description}</p>
                    <div className="font-semibold mt-2 text-center">Score: {score}</div>
                </div>

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
      
                {/* Boutons d'actions */}
                <div className="col-span-6 row-start-8 mt-6 flex justify-center">
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
      
              {/* Feedback de l'utilisateur */}
              {feedback && (
                <div className="absolute left-4 bottom-4 flex items-center space-x-2 p-4 bg-white bg-opacity-80 rounded-lg shadow-md">
                  <img src="/images/pompier_valid.png" alt="Validation" className="w-16 h-16 object-contain" />
                  <p className="text-black">{feedback}</p>
                </div>
              )}
            </div>
          </div>
        </>
      )
      
      

}

export default Game;