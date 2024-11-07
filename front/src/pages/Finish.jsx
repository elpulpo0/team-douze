import "./start/cadre.css"
import Badge from "../components/badge"
import React, { useState, useEffect } from 'react';


function Finish() {
  const [badges, setBadges] = useState([
    { id: 1, name: 'Maître des Flammes', icon: '/images/flame.png', isEarned: true, description: 'Pour avoir bravé et éteint un incendie menaçant, sauvant tout sur son passage', isAnimated: false },
    { id: 2, name: 'Maître des Vagues', icon: '/images/Flooding_rain.png', isEarned: false, description: 'Décerné à celui qui a protégé les terres inondées', isAnimated: true },
    { id: 3, name: 'Maître de la terre', icon: '/images/Earth.png', isEarned: false, description: 'Awarded for defeating Lt. Surge.', isAnimated: false }, // Only this badge animates
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
      <h2>Congratulations! Here are your badges:</h2>
      <div className="badge-container">
        {badges.map((badge) => (
          <Badge key={badge.id} {...badge} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Finish;