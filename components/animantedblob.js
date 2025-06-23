import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBlob({ className, style }) {
  const [target, setTarget] = useState({
    x: 0,
    y: 0,
    scale: 1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTarget({
        x: (Math.random() - 0.5) * 60,   // random between -30 and +30
        y: (Math.random() - 0.5) * 60,
        scale: 0.9 + Math.random() * 0.3 // random between 0.9 and 1.2
      });
    }, 4000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      style={style}
      animate={target}
      transition={{
        type: 'spring',
        stiffness: 20,
        damping: 10,
      }}
    />
  );
}