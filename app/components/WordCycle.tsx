import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface WordCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

const WordCycle: React.FC<WordCycleProps> = ({ words, interval = 2000, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(wordInterval); // Clean up on unmount
  }, [words, interval]);

  return (
    <motion.span
      key={currentWordIndex}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      {words[currentWordIndex]}
    </motion.span>
  );
};

export default WordCycle;
