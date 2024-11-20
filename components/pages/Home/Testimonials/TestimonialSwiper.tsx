'use client';

import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const data = [
  {
    id: 1,
    name: 'Samantha',
    position: 'CEO',
    title: 'Client and requirement driven company',
    description:
      'Choosing NexGen ERP was one of the best decisions for TechWave Solutions. It seamlessly integrates our project management, HR, inventory, and finance functions into one user-friendly platform. This has streamlined our operations and provided us with real-time insights that are invaluable for decision-making. The implementation was smooth, and the support team was outstanding. NexGen ERP has significantly boosted our productivity and efficiency, allowing us to focus on growth and innovation. We highly recommend it.',
    image: '/deletable/testimonial.png',
  },
  {
    id: 2,
    name: 'Sanjay Upretiiiiiiii',
    position: 'CEO',
    title: 'Client and requirement driven company',
    description:
      'Choosing NexGen ERP was one of the best decisions for TechWave Solutions. It seamlessly integrates our project management, HR, inventory, and finance functions into one user-friendly platform. This has streamlined our operations and provided us with real-time insights that are invaluable for decision-making. The implementation was smooth, and the support team was outstanding. NexGen ERP has significantly boosted our productivity and efficiency, allowing us to focus on growth and innovation. We highly recommend it.',
    image: '/deletable/testimonial.png',
  },
  {
    id: 3,
    name: 'Samantha',
    position: 'CEO',
    title: 'Client and requirement driven company',
    description:
      'Choosing NexGen ERP was one of the best decisions for TechWave Solutions. It seamlessly integrates our project management, HR, inventory, and finance functions into one user-friendly platform. This has streamlined our operations and provided us with real-time insights that are invaluable for decision-making. The implementation was smooth, and the support team was outstanding. NexGen ERP has significantly boosted our productivity and efficiency, allowing us to focus on growth and innovation. We highly recommend it.',
    image: '/deletable/testimonial.png',
  },
];

const TestimonialSwiper = () => {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType>();

  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 lg:w-2/3 xl:w-1/2'>
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        slidesPerView={1}
        className='testimonial-swiper flex flex-row gap-4 rounded-b-2xl'
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        loop
        spaceBetween={24}
      >
        {data?.map((data, index) => (
          <SwiperSlide key={index} className='swiper-slide'>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-center'>
                <div className='z-10 -mb-8 flex w-fit flex-row items-center gap-4 rounded-2xl bg-primary p-4'>
                  <Image
                    src={data.image}
                    alt='testimonials'
                    width={400}
                    height={400}
                    className='size-16 object-contain'
                  />
                  <div className='flex flex-col items-start text-lg'>
                    <p className='text-white'>{data.name}</p>
                    <p className='text-white'>{data.position}</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-6 rounded-2xl bg-white px-8 pb-8 pt-14'>
                <div className='flex flex-row items-end justify-center gap-6'>
                  <Image
                    src='/icons/quote.png'
                    alt='quote'
                    width={100}
                    height={100}
                    className='size-16 object-contain'
                  />
                  <p className='rounded-2xl bg-secondary p-1 text-white'>{data.title}</p>
                </div>
                <p className='text-mainBlack'>{data.description}</p>
              </div>
            </div>
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

export default TestimonialSwiper;
