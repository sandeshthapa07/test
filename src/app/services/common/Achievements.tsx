'use client';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import React from 'react';
import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const Achievements = () => {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType>();

  return (
    <div
      style={{
        backgroundImage: `url("/svg/award.svg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='common-padding common-section'
    >
      <CommonTitle title='Pinnacles of success in SEO' className='text-center' />
      <CommonParargraph
        text='We follow industry standard software development life cycle (SDLC) methodologies, including Agile and Waterfall, to ensure a structured and efficient development process. Our typical Software development cycle involves:We follow industry.'
        className='max-w-[1350px] text-center'
      />
      <div className='flex w-full max-w-[1350px] flex-col items-center justify-center gap-6'>
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className='testimonial-swiper flex flex-row gap-4 rounded-b-2xl'
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <SwiperSlide key={item}>
              <div>
                <Image src='/deletable/award.png' alt='award' width={400} height={400} className='object-contain' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='flex flex-row items-center gap-4'>
        <button onClick={() => swiperInstance?.slidePrev()} className='rounded-md bg-lightShade1 p-3'>
          <FaChevronLeft />
        </button>
        <button onClick={() => swiperInstance?.slideNext()} className='rounded-md bg-lightShade1 p-3'>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Achievements;
