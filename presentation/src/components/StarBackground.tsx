'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const StarBackground: React.FC = () => {
  const [stars, setStars] = React.useState<any[]>([]);

  React.useEffect(() => {
    const generatedStars = [...Array(40)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 10 + 6,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      isPrimary: i % 3 === 0
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: star.duration,
            delay: star.delay
          }}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
          }}
          className="text-white/40 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        >
          <Star 
            size={star.size} 
            fill="currentColor" 
            className={star.isPrimary ? "text-primary/30" : "text-white/40"}
          />
        </motion.div>
      ))}
    </div>
  );
};
