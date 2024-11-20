import React from 'react';
import Link from 'next/link';
import { MdEmail, MdPhone } from 'react-icons/md';

const InfoHeader = () => {
  return (
    <nav className='info-header flex flex-col gap-4  px-6 py-4 xmd:flex-row xmd:justify-between  xmd:px-16 xl:px-[6.25rem] 3xl:px-[9.375rem]'>
      <ul className='email-phone flex flex-row items-center justify-between xmd:gap-8 '>
        <li>
          <a href='mailto:aitc@gmail.com' className='flex items-center justify-center gap-2'>
            {' '}
            <span>
              <MdEmail fill='#FF7500' size={24} />
            </span>
            <span>aitc@gmail.com</span>
          </a>
        </li>
        <li>
          <a href='tel:+977 9812345123' className='flex items-center gap-2'>
            {' '}
            <span>
              <MdPhone fill='#FF7500' size={24} />
            </span>
            +977 9812345123
          </a>
        </li>
      </ul>
      <Link href='/ ' className='bookconsultation font-medium text-primary'>
        Book a free consultation !!!
      </Link>
    </nav>
  );
};

export default InfoHeader;
