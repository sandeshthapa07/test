'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

import useOutsideClick from '../../../hooks/useOutSideClick';
import MobileServices from './services/MobileServices';

const MobileLayout = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);

  useOutsideClick(ref, () => setOpenMenu(false));
  useEffect(() => {
    if (!openMenu) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openMenu]);

  return (
    <button
      ref={ref}
      onClick={() => setOpenMenu(!openMenu)}
      className=' lg:hidden'
    >
      {openMenu ? (
        <MdClose size={32} fill='#5F6368' />
      ) : (
        <RxHamburgerMenu size={32} fill='#5F6368' />
      )}{' '}
      {openMenu && <MobileMenu />}
    </button>
  );
};

export default MobileLayout;

const MobileMenu = () => {
  return (
    <button
      onClick={(e) => e.stopPropagation()}
      className='absolute left-0 top-full z-[9999999999] flex w-full flex-col items-center justify-start border bg-white'
    >
      <div className='size-full'>
        {/* the height of 190px is the height of header */}
        <ul className='flex h-[calc(100vh-190px)]  flex-col items-start gap-8 overflow-y-auto  p-6 '>
          <div className='h-auto w-full  text-lg text-mainBlack'>
            <MobileServices />
          </div>
          <li>
            <Link className='text-lg text-mainBlack' href='/ourwork'>
              Our Work
            </Link>
          </li>
          <li>
            <Link className='text-lg text-mainBlack' href='/Career'>
              Career
            </Link>
          </li>
          <li>
            <Link className='text-lg text-mainBlack' href='/insights'>
              Insights
            </Link>
          </li>
          <li>
            <Link className='text-lg text-mainBlack' href='/Classroom'>
              ClassRoom
            </Link>
          </li>
        </ul>
      </div>
    </button>
  );
};
