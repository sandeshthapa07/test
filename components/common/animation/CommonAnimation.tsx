'use client';

import React, { useRef } from 'react';
import { easeIn, motion, useInView } from 'framer-motion';

export const CommonAnimation = ({
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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: delay ? delay : 0.3, ease: easeIn }}
      className={`common-animation ${className}`}
    >
      {children}
    </motion.div>
  );
};
