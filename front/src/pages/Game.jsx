import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css'
import Scenario from "../scenarios/innondation.data"

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
        console.log(eventIndex)
        console.log(Scenario.evenements[eventIndex].avancement)
        updateGold(Scenario.evenements[eventIndex].avancement.succes.gold)
    } else {
        setFeedback(Scenario.evenements[eventIndex].feedback)
        updateScore(Scenario.evenements[eventIndex].avancement.echec.value)
        updateGold(Scenario.evenements[eventIndex].avancement.echec.gold)
        console.log(Scenario.evenements[eventIndex].avancement.succes)

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
    sleep(3000).then(() => { 
        if(Scenario.evenements.length-1 > eventIndex) {
            setEventIndex(eventIndex+1) 
        } else {
            navigate("/emergency-bag", { state: { score: score, gold: gold } });
        }

     });

    
}


return ( 
<>
  <div className='flex justify-center w-screen h-screen'>
  <div className="grid grid-cols-6 grid-rows-8 gap-4 w-full h-full bg-contain bg-no-repeat bg-center	" style={{ 
    backgroundImage: `url("/images/${background}")` 
    }}>
    <div className="col-span-6 col-start-1 row-start-1">
    <div className='rounded w-100 mb-4 text-white h-50 flex justify-between'>
        <div>
            Mission: {Scenario.nom}
            <br />
            Description: {Scenario.description}
        </div>
        <div>
            Score: {score}
        </div>
        <div>
            Gold: {gold}
        </div>
    </div>

    </div>
    <div className="col-span-6 row-span-1 col-start-1 row-start-2 flex justify-center">
        <div className='p-2 bg-white opacity-50 w-fit rounded'>
            <div className='text-black opacity-100'>{eventContext && eventContext}</div>
        </div>
    </div>
    <div className="col-span-3 row-span-3 col-start-2 row-start-3">
        <div className=' bg-white p-5 rounded opacity-50 w-fit'>
            <div className='text-black'>{eventName && eventName}</div>
        </div>
    </div>
    <div className="col-span-3 row-span-3 col-start-4 row- start-4">4</div>
    <div className="col-span-6 row-span-2 col-start-1 row-start-8">
    <ul>
                {eventActions && eventActions.map((action, index) => (
                    <button key={index} className='text-white' onClick={() => ExecuteEventAction(action)}>{action.label}</button>
                ))}
            </ul>

    </div>
</div>

    { feedback &&
        <div className='fixed left-0 bottom-0 flex justify-center align-start' style={{width: "25%"}}>
                            <img src="/images/pompier_valid.png" className='block' style={{width: "50%"}}/>

            <p className='bg-white text-black w-full'>
                {feedback}
            </p>

        </div>}
  </div>
</>
)
}

export default Game;