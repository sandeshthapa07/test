'use client';

import { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(open ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [open]);

  return (
    <div className='flex w-full flex-col  rounded-lg bg-lightShad2'>
      <button onClick={onClick} className={`flex flex-row items-start justify-between p-6 text-mainBlack`}>
        <p className={`text-left text-xl text-mainBlack hover:text-primary ${open ? 'text-primary' : ''}`}>
          {question}
        </p>
        <p className='py-2'>{open ? <FaChevronUp className='text-primary' /> : <FaChevronDown />}</p>
      </button>
      {open && <hr className='mx-auto w-[95%] border-primary' />}
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-700 ease-in-out`}
        style={{ maxHeight: contentHeight }}
      >
        <p
          className='text-gray8 p-6 text-left text-mainBlack opacity-0 transition-opacity duration-700 ease-in-out'
          style={{ opacity: open ? 1 : 0 }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
