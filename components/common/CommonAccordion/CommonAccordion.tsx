'use client';

import { useEffect, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

interface CommonAccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const CommonAccordion = ({
  question,
  answer,
  isOpen,
  onToggle,
}: CommonAccordionProps) => {
  const [height, setHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current?.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className='accordion-container flex flex-col gap-2 border-b p-4'>
      <button
        type='button'
        onClick={onToggle}
        className='accordion-header text-gray8 relative  flex w-full flex-row items-start justify-between text-left lg:items-center'
      >
        <p className='font-medium text-mainBlack '>{question}</p>
        {isOpen ? (
          <FaAngleDown className='absolute right-2 top-2 rotate-180 transition-all duration-300' />
        ) : (
          <FaAngleDown className='absolute right-2 top-2 transition-all duration-300' />
        )}
      </button>
      {isOpen && (
        <div
          ref={contentRef}
          style={{ maxHeight: height }}
          className='accordion-body overflow-hidden transition-all duration-300'
        >
          <p className='text-grey'>{answer}</p>
        </div>
      )}
    </div>
  );
};
