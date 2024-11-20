import Image from 'next/image';

import ServiceCommonBanner from '../../common/ServiceCommonBanner';

const Banner = () => {
  return (
    <div className='common-padding flex flex-col items-center justify-center gap-10 overflow-hidden bg-lightShad2 pt-[3.75rem] sm:pt-20'>
      <div className='max-w-[984px]'>
        <ServiceCommonBanner
          isColumn
          isSecondaryButton
          title='Mobile Application Development'
          description='We build websites for startups and businesses. Our team of experts will design and develop a website that is user-friendly, visually appealing, and optimized for search engines.'
          chip='Mobile Application Development'
          primarybuttonLink='/contact-us'
          primarybuttonText='Contact Us'
          secondarybuttonLink='/contact-us'
          secondarybuttonText='Get a quote'
        />
      </div>

      <div className='images pointer-events-none  flex w-[1800px] flex-row place-items-end   justify-center gap-4 '>
        <div className='flex flex-col items-center gap-4 self-end'>
          <div className='relative h-[99px] w-[236px]'>
            <Image src='/deletable/banner2.jpeg' fill alt='iamgess' draggable={false} className='rounded-2xl' />
          </div>
          <div className='relative h-[145px] w-[236px]'>
            <Image src='/deletable/banner1.jpeg' fill alt='iamgess' draggable={false} className='rounded-2xl' />
          </div>
        </div>
        <div className='relative h-[167px] w-[190px]'>
          <Image src='/deletable/banner3.jpeg' fill alt='iamgess' draggable={false} className='rounded-2xl' />
        </div>
        <div className='relative h-[180px] w-[235px]'>
          <Image src='/deletable/banner3.jpeg' fill alt='iamgess' draggable={false} className='rounded-2xl' />
        </div>
        <div className='relative h-[202px] w-[235px]'>
          <Image src='/deletable/banner3.jpeg' fill alt='iamgess' draggable={false} className='rounded-2xl' />
        </div>
        <div className='flex flex-col items-center gap-4'>
          <div className='relative h-[129px] w-[180px]'>
            <Image src='/deletable/banner2.jpeg' fill alt='iamgess' draggable={false} className='rounded-2xl' />
          </div>
          <div className='relative h-[101px] w-[180px]'>
            {' '}
            <Image src='/deletable/banner1.jpeg' fill alt='iamgess' draggable={false} className='rounded-2xl' />
          </div>
        </div>
        <div className='relative h-[180px] w-[236px]'>
          {' '}
          <Image src='/deletable/testimonial.png' fill alt='iamgess' draggable={false} className='rounded-2xl' />
        </div>
        <div className='relative h-[205px] w-[236px]'>
          {' '}
          <Image src='/deletable/banner3.jpeg' fill alt='iamgess' draggable={false} className='rounded-2xl' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
