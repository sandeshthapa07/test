'use client';

import React from 'react';
import { Grid, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import IndustrySegmentCard from './IndustrySegmentCard';

const data = [
  {
    id: 1,
    icon: '/deletable/telecommunication.png',
    title: 'Technology',
    description:
      'Hospitality is about creating exceptional guest experiences. Effective management ensures seamless operations, from customer service to housekeeping. By focusing on guest satisfaction and efficiency, hospitality creates a warm environment where every detail matters.',
  },
  {
    id: 2,
    icon: '/deletable/telecommunication.png',
    title: 'Technology',
    description:
      'Hospitality is about creating exceptional guest experiences. Effective management ensures seamless operations, from customer service to housekeeping. By focusing on guest satisfaction and efficiency, hospitality creates a warm environment where every detail matters.',
  },
  {
    id: 3,
    icon: '/deletable/telecommunication.png',
    title: 'Technology',
    description:
      'Hospitality is about creating exceptional guest experiences. Effective management ensures seamless operations, from customer service to housekeeping. By focusing on guest satisfaction and efficiency, hospitality creates a warm environment where every detail matters.',
  },
  {
    id: 4,
    icon: '/deletable/telecommunication.png',
    title: 'Technology',
    description:
      'Hospitality is about creating exceptional guest experiences. Effective management ensures seamless operations, from customer service to housekeeping. By focusing on guest satisfaction and efficiency, hospitality creates a warm environment where every detail matters.',
  },
  {
    id: 5,
    icon: '/deletable/telecommunication.png',
    title: 'Technology',
    description:
      'Hospitality is about creating exceptional guest experiences. Effective management ensures seamless operations, from customer service to housekeeping. By focusing on guest satisfaction and efficiency, hospitality creates a warm environment where every detail matters.',
  },
  {
    id: 6,
    icon: '/deletable/telecommunication.png',
    title: 'Technology',
    description:
      'Hospitality is about creating exceptional guest experiences. Effective management ensures seamless operations, from customer service to housekeeping. By focusing on guest satisfaction and efficiency, hospitality creates a warm environment where every detail matters.',
  },
  {
    id: 7,
    icon: '/deletable/telecommunication.png',
    title: 'Technology',
    description:
      'Hospitality is about creating exceptional guest experiences. Effective management ensures seamless operations, from customer service to housekeeping. By focusing on guest satisfaction and efficiency, hospitality creates a warm environment where every detail matters.',
  },
  {
    id: 8,
    icon: '/deletable/telecommunication.png',
    title: 'Technology',
    description:
      'Hospitality is about creating exceptional guest experiences. Effective management ensures seamless operations, from customer service to housekeeping. By focusing on guest satisfaction and efficiency, hospitality creates a warm environment where every detail matters.',
  },
  {
    id: 9,
    icon: '/deletable/telecommunication.png',
    title: 'Technology',
    description:
      'Hospitality is about creating exceptional guest experiences. Effective management ensures seamless operations, from customer service to housekeeping. By focusing on guest satisfaction and efficiency, hospitality creates a warm environment where every detail matters.',
  },
  {
    id: 10,
    icon: '/deletable/telecommunication.png',
    title: 'Technology',
    description:
      'Hospitality is about creating exceptional guest experiences. Effective management ensures seamless operations, from customer service to housekeeping. By focusing on guest satisfaction and efficiency, hospitality creates a warm environment where every detail matters.',
  },
  {
    id: 11,
    icon: '/deletable/telecommunication.png',
    title: 'Technology',
    description:
      'Hospitality is about creating exceptional guest experiences. Effective management ensures seamless operations, from customer service to housekeeping. By focusing on guest satisfaction and efficiency, hospitality creates a warm environment where every detail matters.',
  },
  {
    id: 12,
    icon: '/deletable/telecommunication.png',
    title: 'Technology',
    description:
      'Hospitality is about creating exceptional guest experiences. Effective management ensures seamless operations, from customer service to housekeeping. By focusing on guest satisfaction and efficiency, hospitality creates a warm environment where every detail matters.',
  },
  {
    id: 13,
    icon: '/deletable/telecommunication.png',
    title: 'Technology',
    description:
      'Hospitality is about creating exceptional guest experiences. Effective management ensures seamless operations, from customer service to housekeeping. By focusing on guest satisfaction and efficiency, hospitality creates a warm environment where every detail matters.',
  },
  {
    id: 14,
    icon: '/deletable/telecommunication.png',
    title: 'Technology',
    description:
      'Hospitality is about creating exceptional guest experiences. Effective management ensures seamless operations, from customer service to housekeeping. By focusing on guest satisfaction and efficiency, hospitality creates a warm environment where every detail matters.',
  },
];

const IndustrySegmentsSwiper = () => {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType>();
  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 lg:w-2/3'>
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        modules={[Navigation, Grid]}
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
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        grid={{
          rows: 2,
        }}
        className='industry-swiper'
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className='swiperslide'>
            <IndustrySegmentCard icon={item.icon} title={item.title} description={item.description} />
          </SwiperSlide>
        ))}
      </Swiper>
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

export default IndustrySegmentsSwiper;
