import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css'
import Scenario from "../scenarios/innondation.data"
import '../App.css';
import Button_back from '../components/buttons/Button_back';
import Button_custom from '../components/buttons/Button_custom';

import { useLocation } from 'react-router-dom';


function EmergencyBag() {
    const navigate = useNavigate();


    let location = useLocation();


    const [bag, setBag] = useState([])
    const [gold, setGold] = useState(0)
    const [score, setScore] = useState(0)

    const itemMax = 5

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    useEffect(() => {
        setGold(location.state.gold)
    }, [location.state.gold])

    useEffect(() => {
        setScore(location.state.score)
    }, [location.state.score])

    useEffect(() => {
        if(bag.length === itemMax) {
            sleep(3000).then(() => { 
                navigate("/finish", { state: { score: score, gold: gold } });
            });
        }
    }, [bag])

    const addToBag = (item) => {
        if(!bag.find(itemBag => itemBag.id === item.id) && bag.length < itemMax && location.state.gold >= item.cost) {
            setBag([...bag, item])
            setGold(gold - item.cost)
            setScore(score + item.score)
        }
    }

return ( 
<>
    <div className='background-container flex justify-center w-screen h-screen'>
        <div className="flex flex-col w-full h-full bg-contain bg-no-repeat bg-center" 
            style={{ 
                backgroundImage: `url("/images/emergencyBag.png")`,
                justifyContent: 'space-between' 
            }}
        >
            <div className='flex flex-col'>
                <div className='rounded w-100 mb-4 text-white h-50 flex justify-between'>
                    {location.state && (
                        <>
                           <h1 style={{ fontSize: '1.5vw' }}>
                        RÉCUPÈRE LES OBJETS QUE TU PENSES UTILES EN CAS D'INONDATION
                            </h1>

                            
                        </>
                    )}
                </div>
            </div>

            <div className='rounded bg-gray-400 flex flex-row mb-6'>
                <div className={`w-16 h-16 m-2 rounded ${bag.length > 0 ? (bag[0].is_success ? 'bg-green-500' : 'bg-red-500') : 'bg-black'}`}>
                    
                </div>
                <div className={`w-16 h-16 m-2 rounded ${bag.length > 1 ? (bag[1].is_success ? 'bg-green-500' : 'bg-red-500') : 'bg-black'}`}>
                    
                </div>
                <div className={`w-16 h-16 m-2 rounded ${bag.length > 2 ? (bag[2].is_success ? 'bg-green-500' : 'bg-red-500') : 'bg-black'}`}>
                    
                </div>
                <div className={`w-16 h-16 m-2 rounded ${bag.length > 3 ? (bag[3].is_success ? 'bg-green-500' : 'bg-red-500') : 'bg-black'}`}>
                    
                </div>
                <div className={`w-16 h-16 m-2 rounded ${bag.length > 4 ? (bag[4].is_success ? 'bg-green-500' : 'bg-red-500') : 'bg-black'}`}>
                    
                </div>
            </div>
        </div>
    </div>
 
    <div>
        {/* lunette de vue */}
        <div 
            className={`w-fit fixed rounded border border-white 
                ${bag.find(item => item.id === 4) ? (bag.find(item => item.id === 4).is_success ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-white'}
            `}
            style={{left: "240px", top: "510px", width: "80px"}} 
            onClick={() => addToBag(Scenario.objects[3])}>
            <div className='pt-7 text-md'
        >10 🪙</div>
        </div>
        {/* lunette de soleil */}
        <div 
            className={`w-fit fixed rounded border border-white 
                ${bag.find(item => item.id === 3) ? (bag.find(item => item.id === 3).is_success ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-white'}
            `}            style={{left: "500px", top: "510px", width: "80px"}}
            onClick={() => addToBag(Scenario.objects[2])}>
            <div className='pt-7 text-md'>10 🪙</div>
        </div>
        {/* XBOX */}
        <div 
            className={`w-fit fixed rounded border border-white 
                ${bag.find(item => item.id === 8) ? (bag.find(item => item.id === 8).is_success ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-white'}
            `}            onClick={() => addToBag(Scenario.objects[7])}
            style={{left: "390px", top: "610px", width: "120px"}}
            >
            <div className='text-md' style={{paddingTop: "100px"}}>10 🪙</div>
        </div>
        {/* LEGO */}
        <div 
            className={`w-fit fixed rounded border border-white 
                ${bag.find(item => item.id === 7) ? (bag.find(item => item.id === 7).is_success ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-white'}
            `}            onClick={() => addToBag(Scenario.objects[6])}
            style={{left: "300px", top: "750px", width: "200px"}}
            >
            <div className='text-md' style={{paddingTop: "110px"}}>10 🪙</div>
        </div>
        {/* BALLON */}
        <div 
            className={`w-fit fixed rounded border border-white 
                ${bag.find(item => item.id === 10) ? (bag.find(item => item.id === 10).is_success ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-white'}
            `}            onClick={() => addToBag(Scenario.objects[9])}
            style={{left: "550px", top: "750px", width: "100px"}}
            >
            <div className='text-md' style={{paddingTop: "110px"}}>10 🪙</div>
        </div>
        {/* LAMPE TORCHE */}
        <div 
            className={`w-fit fixed rounded border border-white 
                ${bag.find(item => item.id === 9) ? (bag.find(item => item.id === 9).is_success ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-white'}
            `}            onClick={() => addToBag(Scenario.objects[8])}
            style={{left: "700px", top: "650px", width: "150px"}}
        >
            <div className='text-md' style={{paddingTop: "70px"}}>10 🪙</div>
        </div>
        {/* TROUSSE DE SECOURT */}
        <div 
            className={`w-fit fixed rounded border border-white 
                ${bag.find(item => item.id === 6) ? (bag.find(item => item.id === 6).is_success ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-white'}
            `}            onClick={() => addToBag(Scenario.objects[5])}
            style={{left: "900px", top: "620px", width: "150px"}}
        >
            <div className='text-md' style={{paddingTop: "80px"}}>10 🪙</div>
        </div>
        {/* VESTE */}
        <div 
            className={`w-fit fixed rounded border border-white 
                ${bag.find(item => item.id === 2) ? (bag.find(item => item.id === 2).is_success ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-white'}
            `}            onClick={() => addToBag(Scenario.objects[1])}
            style={{left: "1030px", top: "350px", width: "100px"}}
        >
            <div className='text-md' style={{paddingTop: "230px"}}>10 🪙</div>
        </div>
        {/* CLE */}
        <div 
            className={`w-fit fixed rounded border border-white 
                ${bag.find(item => item.id === 5) ? (bag.find(item => item.id === 5).is_success ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-white'}
            `}            onClick={() => addToBag(Scenario.objects[4])}
            style={{left: "1115px", top: "220px", width: "100px"}}>
            <div className='text-md' style={{paddingTop: "100px"}}>10 🪙</div>
        </div>
        {/* BOUTEILLE EAU */}
        <div 
            className={`w-fit fixed rounded border border-white 
                ${bag.find(item => item.id === 1) ? (bag.find(item => item.id === 1).is_success ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-white'}
            `}            onClick={() => addToBag(Scenario.objects[0])}
            style={{left: "1255px", top: "490px", width: "100px"}}>
            <div className='text-md' style={{paddingTop: "100px"}}>10 🪙</div>
        </div>
        {/* CHIPS */}
        <div 
            className={`w-fit fixed rounded border border-white 
                ${bag.find(item => item.id === 11) ? (bag.find(item => item.id === 11).is_success ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-white'}
            `}            onClick={() => addToBag(Scenario.objects[10])} 
            style={{left: "1280px", top: "620px", width: "100px"}}>
            <div className='text-md' style={{paddingTop: "70px"}}>10 🪙</div>
        </div>
        {/* RADIO */}
        <div 
            className={`w-fit fixed rounded border border-white 
                ${bag.find(item => item.id === 12) ? (bag.find(item => item.id === 12).is_success ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-white'}
            `}            onClick={() => addToBag(Scenario.objects[11])}
            style={{left: "1390px", top: "580px", width: "100px"}}
            >
            <div className='text-md' style={{paddingTop: "80px"}}>10 🪙</div>
        </div>
    </div>


</>
)}

export default EmergencyBag;