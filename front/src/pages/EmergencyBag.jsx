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







return ( 
<>
    <div className='flex justify-center w-screen h-screen'>
        <div className="grid grid-cols-6 grid-rows-8 gap-4 w-full h-full bg-contain bg-no-repeat bg-center" 
        style={{ 
            backgroundImage: `url("/images/emergencyBag.png")` 
        }}>

<div className="col-span-6 col-start-1 row-start-1">
    <div className='rounded w-100 mb-4 text-white h-50 flex justify-between'>
        {location.state && (
            <>
                <div>
                    Mission: {Scenario.nom}
                    <br />
                    Description: {Scenario.description}
                </div>
                <div>
                    Score: {location.state.score}
                </div>
                <div>
                    Gold: {location.state.gold}
                </div>
            </>
        )}
    </div>
    <div className="col-span-6 col-start-1 row-start-2">
        {/* lunette de vue */}
        <div className=' w-fit fixed rounded border border-white' style={{left: "240px", top: "510px", width: "80px"}}>
            <div className='pt-7 text-xs'>10 Gold</div>
        </div>
        {/* lunette de soleil */}
        <div className=' w-fit fixed rounded border border-white' style={{left: "500px", top: "510px", width: "80px"}}>
            <div className='pt-7 text-xs'>10 Gold</div>
        </div>
    </div>  
    </div>       

    
    </div>
</div>

</>
)}

export default EmergencyBag;