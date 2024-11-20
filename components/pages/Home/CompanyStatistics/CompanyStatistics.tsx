'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';

import CommonButton from '@/components/common/CommonButton';

export default function CompanyStatistics() {
  const stats = [
    { number: 99, letter: '%', content: 'Customer satisfaction' },
    { number: 20, letter: 'M', content: 'Total members' },
    { number: 89, letter: '+', content: 'Projects completed' },
    { number: 540, letter: 'K+', content: 'Hours of work' },
  ];

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section
      ref={ref}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="statistics-section flex h-auto w-full items-center justify-center bg-secondary bg-[url('/svg/statistics.svg')] bg-right-top bg-no-repeat px-6 py-16 sm:px-10 sm:py-[100px] md:!bg-[length:397px] md:py-[67px] lg:p-[100px] xl:!bg-[length:530px] 2xl:px-[197px]"
    >
      <div className='statistics-container flex flex-col gap-16 xl:flex-row'>
        {/* Left Section */}
        <div className='statistics-left-wrapper flex flex-col items-center gap-10 px-6 md:px-16 lg:gap-[52px] lg:px-0 xl:max-w-[456px] xl:items-start'>
          <h3 className='text-center text-[32px] font-extrabold leading-[40.32px] tracking-[2%] text-white lg:text-5xl lg:leading-[60.32px] xl:text-left'>
            Company Statistics & Insights
          </h3>
          <p className='text-center text-lg text-white xl:text-left'>
            Discover our ethos, achievements, and commitment to excellence. Explore our prestigious client base and
            remarkable success rate, and learn how we can take your business to new heights.
          </p>
          <CommonButton text='Learn more' href='' />
        </div>

        {/* Right Section */}
        <div className='number-wrapper flex flex-col items-center justify-center gap-10 md:flex-row lg:py-16'>
          {stats.map(({ number, letter, content }) => (
            <div key={number + letter} className='flex flex-col items-center'>
              <h3 className='number-shadow bg-gradient-to-b from-[#4F3B8F] to-[#3D2D72] bg-clip-text text-[64px] font-bold leading-[62px] text-transparent lg:text-[70px] xl:text-[100px] 2xl:text-9xl'>
                <CountUp duration={3} start={isInView ? 0 : undefined} end={number} />
              </h3>
              <div className='number-title -mt-6 flex flex-col items-center gap-6 2xl:-mt-10'>
                <h3 className='text-[40px] font-extrabold text-white lg:text-[44px] xl:text-[48px] 2xl:text-[64px]'>
                  <CountUp duration={4} start={isInView ? 0 : undefined} end={number} />
                  {letter}
                </h3>
                <p className='text-lg text-primary'>{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
