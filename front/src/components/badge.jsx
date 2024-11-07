import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Badge.css';

function Badge({ name, icon, isEarned, description, isAnimated }) {
  const [isAnimating, setIsAnimating] = useState(isAnimated);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false); // Stop animation after 2 seconds
      }, 2000); // Animation stops after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <motion.div
      className={`${isEarned ? 'earned badge' : 'badge-animated'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <motion.div className="badge-icon-container">
        <motion.img
          src={icon}
          alt={`${name} badge`}
          className={
            isAnimating
              ? 'badge-icon-animated'
              : "badge-icon"
          }
          animate={
            isAnimating
              ? {
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0], // This will make the rotation happen
                }
              : {}
          }
          transition={
            isAnimating
              ? {
                  repeat: Infinity, // Continuous animation until stopped
                  duration: 1.5, // 1.5 seconds for each cycle
                }
              : {}
          }
        />
      </motion.div>
      <h3 className="badge-name">{name}</h3>
      <p className="badge-tooltip">{description}</p>
    </motion.div>
  );
}

export default Badge;