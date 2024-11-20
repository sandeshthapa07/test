'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';

type Word = {
  name: string;
  icon: string;
  color: string;
};

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: Word[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const nextWord = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(nextWord);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      setTimeout(() => {
        startAnimation();
      }, duration);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 2,
          position: 'absolute',
        }}
        className={cn('relative z-10 inline-block px-2 text-left text-neutral-900 dark:text-neutral-100', className)}
        key={currentWord.name}
      >
        {/* Display the icon and color */}
        <div
          style={{ backgroundColor: currentWord.color }}
          className={`flex flex-row items-center gap-2 rounded-2xl px-4 py-1`}
        >
          <Image src={currentWord.icon} alt={currentWord.name} width={48} height={48} />
          {currentWord.name.split(' ').map((word, wordIndex) => (
            <motion.span
              key={word + wordIndex}
              initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: wordIndex * 0.3,
                duration: 0.3,
              }}
              className='inline-block whitespace-nowrap'
            >
              {word.split('').map((letter, letterIndex) => (
                <motion.span
                  key={word + letterIndex}
                  initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    delay: letterIndex * 0.05,
                    duration: 0.4,
                  }}
                  className='inline-block'
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
