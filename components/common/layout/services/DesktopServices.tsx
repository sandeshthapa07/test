import { type Dispatch, type SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CommonButton from '../../CommonButton';

const otherservices: { id: number; title: string; url: string }[] = [
  {
    id: 1,
    title: 'AR /VR',
    url: '/services',
  },
  {
    id: 2,
    title: '3D Printing',
    url: '/services',
  },
  {
    id: 3,
    title: 'Q/A testing',
    url: '/services',
  },
  {
    id: 4,
    title: 'Digtal Marketing',
    url: '/services',
  },
  {
    id: 5,
    title: 'It consulting',
    url: '/services',
  },
];

export const services = [
  {
    id: 1,
    title: 'Software Development',
    url: '/software development',
    description:
      'Discover the variety of services we provide to address all your business needs.',
  },
  {
    id: 2,
    title: 'Web Development',
    url: '/web development',
    description:
      'Discover the variety of services we provide to address all your business needs.',
  },
  {
    id: 3,
    title: 'Mobile Development',
    url: '/mobile development',
    description:
      'Discover the variety of services we provide to address all your business needs.',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    url: '/digital marketing',
    description:
      'Discover the variety of services we provide to address all your business needs.',
  },
];

const DesktopServices = ({
  setShowServices,
}: {
  setShowServices: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onMouseLeave={() => setShowServices(false)}
      onMouseEnter={() => setShowServices(true)}
      className='services absolute left-0 
       z-[999999999999999999] flex w-full flex-row justify-between gap-8  border-2 border-lightShade1 bg-white px-16 py-6 3xl:px-[9.375rem] '
    >
      <div className='logo flex flex-col gap-6'>
        <Image
          src='/deleteableImage/service.png'
          alt='logo'
          width={76}
          height={72}
        />
        <h4 className='text-xl font-black text-mainBlack '>
          Expert Guidance, Clear Solutions
        </h4>
        <CommonButton
          href='/contactus'
          variant='secondary'
          text='Get a free quote'
          className='w-fit'
        />
      </div>
      <span className='border-r-2 border-lightShade1' />
      <div className='flex w-[654px] flex-col  gap-6'>
        <h4 className='text-xl font-black text-mainBlack '>
          Discover our offering
        </h4>
        <div className='grid  grid-cols-2 gap-6'>
          {services.map((service) => (
            <div className='flexflex-col  gap-2' key={service.id}>
              <h5>
                <Link
                  className='text-lg font-medium text-mainBlack'
                  href={service.url}
                >
                  {service.title}
                </Link>
              </h5>
              <p className=' text-lg font-medium text-grey'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <span className='border-r-2 border-lightShade1' />
      <div className='flex flex-col gap-8'>
        <div className=' flex flex-col gap-6  '>
          <h4 className='text-xl font-black text-mainBlack '>Other Services</h4>

          {otherservices.map((service) => (
            <Link
              key={service.id}
              href={service.url}
              className='text-lg font-medium text-mainBlack'
            >
              {service.title}
            </Link>
          ))}
        </div>
        <CommonButton href='/services' text='View all Services' />
      </div>
    </div>
  );
};

export default DesktopServices;
