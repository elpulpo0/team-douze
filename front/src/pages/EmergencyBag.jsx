import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css'
import Scenario from "../scenarios/innondation.data"
import { useLocation } from 'react-router-dom';

function EmergencyBag() {
    const navigate = useNavigate();
    let location = useLocation();
    console.log(location.state)
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
    if(is_success) {
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
        if(Scenario.evenements.length-1 > eventIndex) {
            setEventIndex(eventIndex+1) 
        } else {
            navigate("/emergency-bag", { state: { score: score } });
        }

     });

    
}


return ( 
<>
  <div className='flex justify-center w-screen h-screen'>
  <div className="grid grid-cols-6 grid-rows-8 gap-4 w-full h-full bg-contain bg-no-repeat bg-center	" style={{ 
    backgroundImage: `url("/images/${background}")` 
    }}>
        </div>
</div>

</>
)
}

export default EmergencyBag;