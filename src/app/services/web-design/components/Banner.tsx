import Image from 'next/image';

import ServiceCommonBanner from '../../common/ServiceCommonBanner';

const Banner = () => {
  return (
    <div className='main-common-padding flex justify-center bg-lightShad2'>
      <div className='flex max-w-[984px] flex-col items-center justify-center gap-10 overflow-hidden xmd:gap-16'>
        <ServiceCommonBanner
          isColumn
          title='Web Design'
          description='We build websites for startups and businesses. Our team of experts will design and develop a website that is user-friendly, visually appealing, and optimized for search engines.'
          chip='Web Design'
          primarybuttonLink='/contact-us'
          primarybuttonText='Contact Us'
          secondarybuttonLink='/contact-us'
          secondarybuttonText='Get a quote'
          isSecondaryButton
        />
        <div className='flex h-[250px] w-[984px]  flex-row justify-center gap-8'>
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index + 1} className={`${index % 2 === 0 ? 'self-end' : 'self-start'}`}>
              <Image
                src='/deletable/web-design.png'
                width={231}
                height={158}
                alt='iamgess'
                draggable={false}
                className='rounded-lg'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
