import Image from 'next/image';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const Help = () => {
  return (
    <div className='main-common-padding flex max-w-[1300px]  flex-col items-center gap-10 lg:flex-row lg:gap-16 '>
      <div className='flex w-full flex-col gap-[3.25rem] lg:w-1/2'>
        <div className='flex flex-col gap-8'>
          <CommonTitle title='Help' className='text-center lg:text-left' />
          <CommonParargraph
            text='As one of the top web development company in Nepal, AITC International offers a variety of website design and development services that can best fulfil your unique business needs and goals. Our web developer’s experiences are high-performing, feature-packed and digitally transformative, designed to be user-friendly, fully functional, very secure and able to scale as your business grows.'
            className='text-center lg:text-left'
          />
        </div>
        <CommonButton text='Learn more' href='/contact' className='mx-auto lg:mx-0' />
      </div>
      <div
        className=' lg:w-1/2
      '
      >
        <Image src='/deletable/help.png' width={521} height={358} alt='help' />
      </div>
    </div>
  );
};

export default Help;
