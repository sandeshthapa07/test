'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

import useOutsideClick from '../../../../hooks/useOutSideClick';
import CommonParargraph from '../../CommonParargraph';
import { CommonHeader } from '../../CommonTitle';

const serviceslist = [
  {
    id: 1,
    title: 'Software Development',
    url: '/softwaredevelopment',
    subCategory: [
      {
        id: 1,
        title: 'ui/ux',
        url: '/softwaredevelopment/ui-ux',
      },
      {
        id: 2,
        title: 'frontedn',
        url: '/softwaredevelopment/frontend',
      },
    ],
  },
  {
    id: 2,
    title: 'Website Development',
    url: '/websitedevelopment',
    subCategory: [
      {
        id: 1,
        title: 'E-commerce',
        url: '/websitedevelopment/e-commerce',
      },
      {
        id: 2,
        title: 'Portfolio',
        url: '/websitedevelopment/portfolio',
      },
    ],
  },
  {
    id: 3,
    title: 'Mobile Development',
    url: '/mobiledevelopment',
    subCategory: [
      {
        id: 1,
        title: 'Android',
        url: '/mobiledevelopment/android',
      },
      {
        id: 2,
        title: 'iOS',
        url: '/mobiledevelopment/ios',
      },
    ],
  },
];

export const Services = () => {
  return (
    <div className='flex flex-col gap-[1.125rem]'>
      <CommonHeader title='SERVICE' />
      <div className='serviceslist flex flex-col gap-4'>
        {serviceslist.map((service) => (
          <FooterServcies key={service?.id} service={service} />
        ))}
      </div>
    </div>
  );
};

const FooterServcies = ({
  service,
}: {
  service: {
    id: number;
    title: string;
    url: string;
    subCategory: {
      id: number;
      title: string;
      url: string;
    }[];
  };
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);

  useOutsideClick(ref, () => setShowMenu(false));
  return (
    <button
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      ref={ref}
      className='relative flex w-fit cursor-pointer flex-row items-center gap-4 pr-6  '
    >
      <CommonParargraph text={service.title} />
      <span>
        <FaChevronRight size={12} fill='#3C3C46' />
      </span>
      {showMenu && <PopOver service={service} />}
    </button>
  );
};

export default FooterServcies;

const PopOver = ({
  service,
}: {
  service: {
    id: number;
    title: string;
    url: string;
    subCategory: {
      id: number;
      title: string;
      url: string;
    }[];
  };
}) => {
  return (
    <div
      className=' absolute 
    bottom-[-10%] left-full flex size-24 w-full flex-col rounded-lg bg-secondary px-6 py-4  '
    >
      <div className='popover relative flex size-full flex-col gap-2.5'>
        <span className='absolute right-full top-2/3'>
          <svg
            width='41'
            height='30'
            viewBox='0 0 41 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M35.2314 1.04929L2.1034 13.585C0.361225 14.2442 0.387012 16.7177 2.14255 17.3405L35.3097 29.1066C37.9133 30.0302 40.6471 28.0993 40.6471 25.3368L40.6471 4.7904C40.6471 1.99252 37.8482 0.0590822 35.2314 1.04929Z'
              fill='#3D2D7B'
            />
          </svg>
        </span>

        {service?.subCategory?.map(
          (sub: { id: number; title: string; url: string }) => (
            <Link
              className='w-full text-start font-medium text-white'
              href={sub?.url}
              key={sub?.id}
            >
              {sub?.title}
            </Link>
          )
        )}
      </div>
    </div>
  );
};
