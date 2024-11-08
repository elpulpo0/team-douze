import "./start/cadre.css"
import Badge from "../components/badge"
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

function Finish() {

  const location = useLocation();

  
  const result = location.state && location.state.score !== 0 ? location.state.score : 0;

  const [showChat, setShowChat] = useState(false); // État pour gérer l'affichage du chat

  const handleClick = () => {
    setShowChat(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };


  const [badges, setBadges] = useState([
    { id: 1, icon: '/images/flame.png', isEarned: true, description: 'Pour avoir bravé et éteint un incendie menaçant, sauvant tout sur son passage', isAnimated: false },
    { id: 2, icon: '/images/Flooding_rain.png', isEarned: false, description: 'Décerné à celui qui a protégé les terres inondées', isAnimated: true },
    { id: 3, icon: '/images/Earth.png', isEarned: false, description: 'Awarded for defeating Lt. Surge.', isAnimated: false },
  ]);

  // Simulate earning the third badge
  useEffect(() => {
    const timer = setTimeout(() => {
      setBadges((prevBadges) =>
        prevBadges.map((badge) =>
          badge.id === 2 ? { ...badge, isEarned: true } : badge
        )
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="background-container">
      <div className="finish-page">
      <div className="badge-container">
        {badges.map((badge) => (
          <Badge key={badge.id} {...badge} />
        ))}
      </div>
    </div>
      <h1 className="score">👏 {result} 🪙</h1>
      
      <div className="custom-cadre">
        <h1 className="class-titre">Qui est le meilleur ? :</h1>
        <p className="p-class">  <div>🥇</div> <div>CM1-A</div> <div>1200 🪙</div>  </p>
        <p className="p-class">  <div>🥈</div> <div>CM2-B</div> <div>990 🪙</div>  </p>
        <p className="p-class">  <div>🥉</div> <div>CP-A</div> <div>960 🪙</div>  </p>
      </div>
      <div className="custom-cadre2">
      <h1 className="class-titre">Une petit rappel :</h1>
      <p className="p-class1">En vigilance orange, rentrez chez vous et mettez-vous à l'abri.</p>
      <p className="p-class1">Même si tout semble calme, restez à l'abri et évitez de téléphoner.</p>
      <p className="p-class1">En cas d'inondation, ne descendez pas dans les sous-sols, fermez portes et fenêtres.</p>
      <p className="p-class1">En cas de montée des eaux, montez en étage, évacuez sur ordre avec votre kit.</p>
      </div>


      <div className="flex flex-col items-center">
        {/* Bouton pour afficher le chat, uniquement si showChat est false */}
        {!showChat && (
          <button
            onClick={handleClick} // Lorsqu'on clique, on appelle handleClick
            className="chat bg-[#FF6F61] hover:bg-[#FF4E3A] text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out text-[1vw] shadow-md hover:shadow-lg"
            id="showChatButton"
          >
            Je veux discuter avec Monsieur le Robot-Pompier
          </button>
        )}

        {/* Affichage du chat uniquement si showChat est true */}
        {showChat && (
          <div className="chat2 flex flex-col h-[500px] w-[500px] bg-[rgba(255,255,255,0.9)] text-black rounded-lg shadow-lg mt-4">
            <div className="px-6 py-4 border-b border-zinc-300 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h2 className="text-[1.2vw] font-semibold text-zinc-800">Monsieur le Robot-Pompier</h2>
                
                {/* Bouton de fermeture avec l'icône SVG */}
                <button aria-label="Hide" onClick={handleCloseChat} className="close-buton text-[1vw]">
                  X
                </button>
              </div>
            </div>

            {/* Contenu du chat */}
            <div className="flex-1 p-6 overflow-y-auto flex flex-col space-y-4 rounded-b-lg" id="chatDisplay">
              <div className="chat-message self-start bg-zinc-200 text-black max-w-xs rounded-lg px-6 py-3 text-[1vw]">
                Comment se protéger des inondations ?
              </div>
            </div>

            {/* Zone de saisie de texte */}
            <div className="px-6 py-4 border-t border-zinc-300 rounded-b-lg">
              <div className="flex gap-4">
                <input
                  placeholder="Ecris ton message..."
                  className="flex-1 p-4 border rounded-lg bg-white text-black border-zinc-300 text-[1vw]"
                  id="chatInput"
                  type="text"
                />
                <button
                  className="bg-[#FF6F61] hover:bg-[#FF4E3A] text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out text-[1vw] shadow-md hover:shadow-lg"
                  id="sendButton"
                >
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Finish;
