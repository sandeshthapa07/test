'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TranslateXAnimation = ({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateX: '80px' }}
      animate={isInView ? { opacity: 1, translateX: '0px' } : {}}
      whileInView={{ opacity: 1, translateX: '0px' }}
      transition={{ duration: 0.6, ease: 'easeIn', delay }}
      className={`common-animation ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default TranslateXAnimation;

export const TranslateLeftToRightAnimation = ({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateX: '-80px' }}
      animate={isInView ? { opacity: 1, translateX: '0px' } : {}}
      whileInView={{ opacity: 1, translateX: '0px' }}
      transition={{ duration: 0.6, ease: 'easeIn', delay }}
      className={`common-animation ${className}`}
    >
      {children}
    </motion.div>
  );
};
