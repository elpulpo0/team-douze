import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
import scenario from "../scenarios/innondation.data";  // Assurez-vous que le JSON est bien importé ici
import Button_game from '../components/buttons/Button_game';

function Game() {
    const navigate = useNavigate();

    const [eventIndex, setEventIndex] = useState(0);
    const [eventName, setEventName] = useState(null);
    const [eventContext, setEventContext] = useState(null);
    const [eventActions, setEventActions] = useState(null);
    const [feedback, setFeedback] = useState(null);
    const [background, setBackground] = useState(null);
    const [score, setScore] = useState(0);
    const [gold, setGold] = useState(0);
    const [action, setAction] = useState(null)
    const [collectedObjects, setCollectedObjects] = useState([]);  // Ajout pour les objets collectés

    // Fonction de pause
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Chargement de l'événement initial
    useEffect(() => {
        loadEvent();
    }, []);

    // Rechargement de l'événement lors du changement de l'index
    useEffect(() => {
        loadEvent();
    }, [eventIndex]);

    // Gestion de l'affichage du feedback et passage à l'événement suivant
    useEffect(() => {
        if (feedback) {
            sleep(3000).then(() => { 
                if (scenario.evenements.length - 1 > eventIndex) {
                    setEventIndex(eventIndex + 1);
                } else {
                    console.log({ score: score, gold: gold });
                    navigate("/emergency-bag", { state: { score: score, gold: gold, collectedObjects: collectedObjects } });
                }
            });
        }
    }, [feedback]);

    // Fonction de chargement des événements
    const loadEvent = () => {
        setFeedback(null);
        const currentEvent = scenario.evenements[eventIndex];
        setBackground(currentEvent.image);
        setEventName(currentEvent.text);
        setEventContext(currentEvent.context);
        setEventActions(currentEvent.actions);
    };

    // Chargement du feedback et mise à jour des scores
    const loadFeedback = (is_success) => {
        const currentEvent = scenario.evenements[eventIndex];
        setFeedback(currentEvent.feedback);

        // Mise à jour des points en fonction de la réussite ou de l'échec
        if (is_success) {
            // Vérification du succès
            console.log(`Succès: +${currentEvent.avancement.succes.value} points et +${currentEvent.avancement.succes.gold} gold`);
            updateScore(currentEvent.avancement.succes.value);
            updateGold(currentEvent.avancement.succes.gold);
        } else {
            // Vérification de l'échec
            console.log(`Échec: +${currentEvent.avancement.echec.value} points et +${currentEvent.avancement.echec.gold} gold`);
            updateScore(currentEvent.avancement.echec.value);
            updateGold(currentEvent.avancement.echec.gold);
        }
    };

    // Mise à jour du score
    const updateScore = (points) => {
        setScore(prevScore => {
            const newScore = prevScore + points;
            console.log(`Score mis à jour: ${prevScore} + ${points} = ${newScore}`);
            return newScore;  // Incrémente le score
        });
    };

    // Mise à jour de l'or
    const updateGold = (goldPoints) => {
        setGold(prevGold => {
            const newGold = prevGold + goldPoints;
            console.log(`Or mis à jour: ${prevGold} + ${goldPoints} = ${newGold}`);
            return newGold;  // Incrémente l'or
        });
    };

    // Collecte d'un objet
    const collectObject = (object) => {
        if (!collectedObjects.includes(object.id)) {
            setCollectedObjects(prevObjects => [...prevObjects, object.id]);
            updateScore(object.score); // Ajoute les points de l'objet
            updateGold(object.cost);   // Ajoute le coût de l'objet en or (vous pouvez ajuster cette logique)
            console.log(`Objet collecté: ${object.label} +${object.score} points et +${object.cost} gold`);
        }
    };

    // Exécution de l'action de l'événement
    const ExecuteEventAction = (action) => {
        loadFeedback(action.is_succes);
        setAction(action)
    };

    return (
        <>
            <div className="custom_font flex flex-col items-center justify-between min-h-screen background-container">
                
                {/* Titre de la mission */}
                <div className="w-full max-w-3xl mb-4 flex justify-between bg-opacity-80 bg-white rounded-lg p-4 text-gray-800 shadow-md">
                    <div className="flex-2 text-left">
                        <h2 className="font-bold text-lg">Mission: {scenario.nom}</h2>
                        <p className="text-md">{scenario.description}</p>
                    </div>
                    <div className="flex-1 text-right">
                        <div className="font-semibold text-lg">Score: {score} pts</div>
                        <div className="font-semibold text-lg">Gold: {gold} 🪙</div>
                    </div>
                </div>

                {/* Contexte de l'événement */}
                <div
                    className="relative grid grid-cols-6 grid-rows-8 w-full max-w-6xl h-[80vh] bg-cover bg-center rounded-lg shadow-lg p-4"
                    style={{ backgroundImage: `url("/images/${background}")` }}
                >
                    <div className="col-span-6 row-start-1 flex justify-center">
                        <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow-md text-black w-3/4 text-center">
                            {eventContext && eventContext}
                        </div>
                    </div>

                    {/* Bulle de pensée pour l'événement */}
                    <div className="col-span-3 row-start-3">
                        <div className="bulle-pensee">
                            <h3 className="font-bold text-black-600">{eventName && eventName}</h3>
                            <div className="mini-bulle mini-bulle1"></div>
                            <div className="mini-bulle mini-bulle2"></div>
                            <div className="mini-bulle mini-bulle3"></div>
                        </div>
                    </div>

                    {/* Boutons d'actions */}
                    <div className="col-span-6 row-start-8 mt-4 flex_custom justify-center">
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

                {/* Feedback utilisateur */}
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
