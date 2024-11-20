import Image from 'next/image';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const National = () => {
  return (
    <div className='national main-common-padding flex max-w-[1354px] flex-col items-center justify-center gap-[3.25rem] lg:flex-row lg:gap-16 '>
      <div className='lg:w-1/2'>
        <Image src='/deletable/Union.png' width={452} height={348} alt='' />
      </div>
      <div className='flex w-full flex-col gap-[3.25rem] lg:w-1/2'>
        <div
          className='flex flex-col 
        gap-8'
        >
          <CommonTitle title={'Why software development'} className='text-center lg:text-left' />
          <CommonParargraph
            text={`We follow industry-standard Software Development Life Cycle (SDLC) methodologies, including Agile and Waterfall, to ensure a structured and efficient development process. Our typical Software development cycle involves:We follow industry-standard Software Development Life Cycle (SDLC) methodologies, including Agile and Waterfall, to ensure a structured and efficient development process. Our typical Software development cycle involves:`}
            className='text-center lg:text-left'
          />
        </div>
        <CommonButton text='Learn more' href={''} className='mx-auto lg:mx-0' />
      </div>
    </div>
  );
};

export default National;
