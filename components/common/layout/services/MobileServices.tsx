import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import { cn } from '../../../../utils/cn';
import CommonButton from '../../CommonButton';
import { services } from './DesktopServices';

const MobileServices = () => {
  const [height, setHeight] = useState('0px');
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current?.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className='accordion-container flex w-full flex-col gap-6'>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='accordion-header flex w-full items-center justify-between'
      >
        <p
          className={cn(
            'text-lg font-medium ',
            isOpen ? 'text-primary' : 'text-mainBlack'
          )}
        >
          {' '}
          Services
        </p>
        {isOpen ? (
          <FaAngleDown
            size={24}
            className=' rotate-180 transition-all duration-300'
          />
        ) : (
          <FaAngleDown size={24} className=' transition-all duration-300' />
        )}
      </button>
      {isOpen && (
        <div
          ref={contentRef}
          style={{ maxHeight: height }}
          className='accordion-body flex flex-col items-start justify-start gap-8 overflow-hidden transition-all duration-300'
        >
          <div className='flex w-full flex-col gap-6'>
            {services.map((service) => (
              <div
                className='flex flex-col items-start gap-2'
                key={service?.id}
              >
                <h5 className=' font-medium text-mainBlack '>
                  {service?.title}
                </h5>
                <p className='text-start text-grey'>{service?.description}</p>
              </div>
            ))}
          </div>

          <CommonButton
            href='/services'
            text='View all services'
            className='py-2.5'
          />
        </div>
      )}
    </div>
  );
};

export default MobileServices;
