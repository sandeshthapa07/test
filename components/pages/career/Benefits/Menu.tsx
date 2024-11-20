'use client';

import { useState } from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

import MenuDetails from './MenuDetails';

const menulist = [
  {
    id: 1,
    title: 'Daily work support',
  },
  {
    id: 2,
    title: 'Work-life balance',
  },
  {
    id: 3,
    title: 'Time management',
  },
  {
    id: 4,
    title: 'Flexibility',
  },
  {
    id: 5,
    title: 'Productivity',
  },
];

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState<number>(1);

  return (
    <div className='flex w-full flex-col gap-12 xl:flex-row'>
      <div
        className=' flex h-fit w-full  flex-row
     gap-6 overflow-x-auto pb-4 xl:w-fit xl:flex-col xl:overflow-x-visible xl:pb-0'
      >
        {menulist?.map((menu) => (
          <motion.button
            key={menu?.id}
            onClick={() => setSelectedMenu(menu?.id)}
            className={cn(
              'relative cursor-pointer whitespace-nowrap rounded-lg  bg-white px-4 py-3.5 text-mainBlack  xl:text-start'
            )}
          >
            {(selectedMenu ?? 1) === menu?.id && (
              <motion.p
                layoutId='clickedBackground'
                style={{
                  color: 'white',
                }}
                transition={{ type: 'spring', duration: 0.5 }}
                className='absolute inset-0 z-10 flex size-full items-center justify-center rounded-lg bg-primary px-4 py-3.5 text-start  text-white xl:justify-start  '
              >
                <span> {menu?.title}</span>
              </motion.p>
            )}
            <span className=' whitespace-nowrap text-start text-mainBlack'>{menu?.title}</span>
          </motion.button>
        ))}
      </div>

      <MenuDetails />
    </div>
  );
};

export default Menu;
